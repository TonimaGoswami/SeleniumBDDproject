package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition {
	WebDriver driver;
	
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
	// for data driven testing without Example use regex to read the values from feature file and store 
	//in parameters username and password 
	// Or use \"([^\"]*\"
	@Then("^User enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password) {
		
		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(password);
	
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
	
	@Then("^User moves to Admin page$")
	public void user_moves_to_admin_page() {
		driver.findElement(By.id("menu_admin_viewAdminModule")).click();
	}
	@Then("^User clicks on Add button$")
	public void user_clicks_on_add_button(){
		driver.findElement(By.id("btnAdd")).click();
	}
	@Then("^User moves to Add User page$")
	public void user_moves_to_add_user_page() {
		String title = driver.findElement(By.xpath("//h1[contains(text(), UserHeading)]")).getText();
		System.out.println("Title of AddUserpage is : " + title);
		Assert.assertEquals("Add User", title);
		
	}
	@Then("^User creates \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_creates_EmployeeName_and_Username_and_Password_and_Confirm_Password(String Employee_name, String Username, String Password, String ConfirmPassword) {
		driver.findElement(By.xpath("//input[@id = 'systemUser_employeeName_empName']")).sendKeys(Employee_name);
		driver.findElement(By.xpath("//input[@id = 'systemUser_userName']")).sendKeys(Username);
		driver.findElement(By.xpath("//input[@id = 'systemUser_password']")).sendKeys(Password);
		driver.findElement(By.xpath("//input[@id = 'systemUser_confirmPassword']")).sendKeys(ConfirmPassword);
	}
	@Then("^User clicks Save button$")
	public void user_clicks_save_button() {
		driver.findElement(By.id("btnSave")).click();
	}
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}
	
	
}
