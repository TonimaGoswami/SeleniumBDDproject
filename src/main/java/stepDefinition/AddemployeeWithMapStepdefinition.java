package stepDefinition;


import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddemployeeWithMapStepdefinition {
WebDriver driver;
	// data Table with maps : for parameterization of test cases
	@Given("^User is already on Login page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "/Users/tanu/Downloads/IMP-Drivers/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://hrm.seleniumminutes.com");
		}
	
	@When("^Title of Login page is OrangeHRM$")
	public void title_of_login_page_is_OrangeHRM() {
		String title = driver.getTitle();
		System.out.println("Title of Loginpage is : " + title);
		Assert.assertEquals("OrangeHRM", title);
		
	}
	
	@Then("^User enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) {
		for(Map<String, String> data : credentials.asMaps(String.class, String.class)) {
		driver.findElement(By.id("txtUsername")).sendKeys(data.get("username"));
		driver.findElement(By.id("txtPassword")).sendKeys(data.get("password"));
		}
	}
	
	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() {
		driver.findElement(By.id("btnLogin")).click();
		
	}
	
	@Then("^User is on Home page$")
	public void user_is_on_home_page() {
		String text = driver.findElement(By.xpath("//h1[contains(text(), 'Dashboard')]")).getText();
		System.out.println("Title of Homepage is : " + text);
		Assert.assertEquals("Dashboard", text);
	}
	

	@Then("^User moves to add employee page$")
	public void user_moves_to_add_employee_page() {
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.id("menu_pim_viewPimModule"))).build().perform();
		driver.findElement(By.linkText("Add Employee")).click();
	}
	@Then("^User enters employee details$")
	public void user_enters_employee_details(DataTable employeeData) {
		for(Map<String, String> eData : employeeData.asMaps(String.class, String.class)) {
		driver.findElement(By.xpath("//input[@id = 'firstName']")).clear();
		driver.findElement(By.xpath("//input[@id = 'firstName']")).sendKeys(eData.get("firstname"));
		driver.findElement(By.xpath("//input[@id = 'lastName']")).clear();
		driver.findElement(By.xpath("//input[@id = 'lastName']")).sendKeys(eData.get("lastname"));
		driver.findElement(By.xpath("//input[@id = 'employeeId']")).clear();
		driver.findElement(By.xpath("//input[@id = 'employeeId']")).sendKeys(eData.get("Employee_Id"));
		driver.findElement(By.xpath("//input[@id = 'chkLogin']")).click();
		driver.findElement(By.xpath("//input[@id = 'user_name']")).sendKeys(eData.get("Username"));
		driver.findElement(By.xpath("//input[@id = 'user_password']")).sendKeys(eData.get("Password"));
		driver.findElement(By.xpath("//input[@id = 're_password']")).sendKeys(eData.get("Confirm_Password"));
		
		// click on save button
		driver.findElement(By.xpath("//input[@id = 'btnSave']")).click();
		
		// move again to add employee page
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.id("menu_pim_viewPimModule"))).build().perform();
		driver.findElement(By.linkText("Add Employee")).click();
		
		}	
	}
	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	

}
