package StepDefinations;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class TaggedHookStepDefination {
	
	WebDriver driver;
	
	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "/Users/rjghori/SeleniumJars/chromedriver");
		driver=new ChromeDriver();
		
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
	    driver.manage().window().maximize();
	    driver.findElement(By.id("email")).sendKeys("rj123@gmail.com");
	    driver.findElement(By.id("passwd")).sendKeys("rj123");
	    driver.findElement(By.id("SubmitLogin")).click();
		
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	
	@Before("@Dresses")
	public void DressesSetUp() {
		driver.findElement(By.xpath("(//div[@id='block_top_menu']//a)[9]")).click();
	}
	
	@Given("^ruser is on home page and hometitle is \"([^\"]*)\"$")
	public void ruser_is_on_home_page_and_hometitle_is(String homeTitle) {
	    String acualTitle=driver.getTitle();
	    System.out.println(acualTitle);
	    Assert.assertEquals(homeTitle, acualTitle);
	}

	@Then("^user clicks on contact page$")
	public void user_clicks_on_contact_page() {
	    driver.findElement(By.id("contact-link")).click();
	}

	@Then("^user enter details$")
	public void user_enter_details() {
		WebElement sContact=driver.findElement(By.id("id_contact"));
		Select s=new Select(sContact);
		
		s.selectByIndex(2);
		System.out.println(sContact.getAttribute("value"));
		
		List<WebElement> list=driver.findElements(By.xpath("//select[@id='id_contact']/option"));
		System.out.println(list.size());
		
		for(WebElement a:list) {
			System.out.println(a.getText());
		}
		
		
		driver.findElement(By.id("message")).sendKeys("hello world!");
	    
	}

	@Then("^user clicks on send button$")
	public void user_clicks_on_send_button() {
	    driver.findElement(By.id("submitMessage")).click();
	}
	
	@Given("^duser is on dresses page and title is \"([^\"]*)\"$")
	public void duser_is_on_dresses_page_and_title_is(String dressTitle) {
	   String actualDTitle=driver.getTitle();
	   System.out.println(actualDTitle);
	   Assert.assertEquals(actualDTitle,dressTitle);
	}

	@Then("^user clicks on casual dresses$")
	public void user_clicks_on_casual_dresses() {
		driver.findElement(By.linkText("Casual Dresses")).click();
	    
	}

	@Then("^user checked the any size checkbox$")
	public void user_checked_the_any_size_checkbox() throws InterruptedException {
		List<WebElement> listSize=driver.findElements(By.xpath("//ul[@id='ul_layered_id_attribute_group_1']//li"));
		System.out.println(listSize.size());
		
		for(WebElement b:listSize) {
			System.out.println(b.getText());
		}
		Thread.sleep(2000);
		driver.findElement(By.id("layered_id_attribute_group_2")).click();
		//listSize.get(1).click();
		Thread.sleep(1000);
	    
	}

}
