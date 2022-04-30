package StepDefinations;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AutomationLoginStepDefinations {
	WebDriver driver;
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page(){
		System.setProperty("webdriver.chrome.driver", "/Users/rjghori/SeleniumJars/chromedriver");
		driver=new ChromeDriver();
		
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
	    driver.manage().window().maximize();
	}

	@When("^title is \"([^\"]*)\"$")
	public void title_is(String title){
	    String actual=driver.getTitle();
	    System.out.println(actual);
	    Assert.assertEquals(title, actual);
	}
// it works for first [2] ways(1) and (2)in feature file (without examples and with examples+outline)
	
	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String user ,String pass){
	    driver.findElement(By.id("email")).sendKeys(user);
	    driver.findElement(By.id("passwd")).sendKeys(pass);
	}
	
	
	// it works for (3) in feature file(without examples and with examples+outline)
//	@Then("^user enters username and passsword$")
//	public void user_enters_username_and_passsword(DataTable LoginData) {
//		List<List<String>> data=LoginData.raw();
//		driver.findElement(By.id("email")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.id("passwd")).sendKeys(data.get(0).get(1));
//	    
//	}

	@Then("^user clicks on signIn button$")
	public void user_clicks_on_signIn_button() {
	    driver.findElement(By.id("SubmitLogin")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page(){
	    String actualHomeTitle=driver.getTitle();
	    System.out.println(actualHomeTitle);
	    Assert.assertEquals("My account - My Store", actualHomeTitle);
	}

	@Then("^user quit$")
	public void user_quit(){
	    driver.quit();
	}


}
