package StepDefinations;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AutomationLoginMapstepDefinations {
	
	WebDriver driver;
	
	@Given("^Mapuser is already on login page$")
	public void mapuser_is_already_on_login_page(){
		System.setProperty("webdriver.chrome.driver", "/Users/rjghori/SeleniumJars/chromedriver");
		driver=new ChromeDriver();
		
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
	    driver.manage().window().maximize();
	    
	}

	@When("^Maptitle is \"([^\"]*)\"$")
	public void maptitle_is(String title){
		String actual=driver.getTitle();
	    System.out.println(actual);
	    Assert.assertEquals(title, actual);
	    
	}

	@Then("^Mapuser enters username and passsword$")
	public void mapuser_enters_username_and_passsword(DataTable lData){
		for(Map<String ,String> data:lData.asMaps(String.class, String.class)) {
			driver.findElement(By.id("email")).sendKeys(data.get("username"));
			driver.findElement(By.id("passwd")).sendKeys(data.get("password"));
			driver.findElement(By.id("SubmitLogin")).click();
			
			driver.findElement(By.linkText("Sign out")).click();
			
		}
		
	}

	@Then("^Mapuser quit$")
	public void mapuser_quit() {
	    driver.quit();
	}
	

		@Given("^user is on Sign in page$")
		public void user_is_on_Sign_in_page() {
		    System.out.println("user is on sign in page");
		}

		@Given("^user is Home page$")
		public void user_is_Home_page(){
			System.out.println("user is on home page");
		}

}
