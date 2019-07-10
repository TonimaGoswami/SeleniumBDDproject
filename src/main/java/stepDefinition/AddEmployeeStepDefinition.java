//package stepDefinition;
//
//
//
//import java.util.List;
//
//import org.junit.Assert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//
//public class AddEmployeeStepDefinition {
//	WebDriver driver;
//	
//	@Given("^User is already on Login page$")
//	public void user_already_on_login_page() {
//		System.setProperty("webdriver.chrome.driver", "/Users/tanu/Downloads/IMP-Drivers/chromedriver");
//		driver = new ChromeDriver();
//		driver.get("http://hrm.seleniumminutes.com");
//		}
//	
//	@When("^Title of Login page is OrangeHRM$")
//	public void title_of_login_page_is_OrangeHRM() {
//		String title = driver.getTitle();
//		System.out.println("Title of Loginpage is : " + title);
//		Assert.assertEquals("OrangeHRM", title);
//		
//	}
//	
//	@Then("^User enters username and password$")
//	public void user_enters_username_and_password(DataTable credentials) {
//		List<List<String>> data = credentials.raw();
//		driver.findElement(By.id("txtUsername")).sendKeys(data.get(0).get(0));
//		driver.findElement(By.id("txtPassword")).sendKeys(data.get(0).get(1));
//	
//	}
//	
//	@Then("^User clicks on Login button$")
//	public void user_clicks_on_Login_button() {
//		driver.findElement(By.id("btnLogin")).click();
//		
//	}
//	
//	@Then("^User is on Home page$")
//	public void user_is_on_home_page() {
//		String text = driver.findElement(By.xpath("//h1[contains(text(), 'Dashboard')]")).getText();
//		System.out.println("Title of Homepage is : " + text);
//		Assert.assertEquals("Dashboard", text);
//	}
//	
//
//	@Then("^User moves to add employee page$")
//	public void user_moves_to_add_employee_page() {
//		Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.id("menu_pim_viewPimModule"))).build().perform();
//		driver.findElement(By.linkText("Add Employee")).click();
//	}
//	@Then("^User enters employee details$")
//	public void user_enters_employee_details(DataTable employeeData) {
//		List<List<String>> eData = employeeData.raw();
//		driver.findElement(By.xpath("//input[@id = 'firstName']")).sendKeys(eData.get(0).get(0));
//		driver.findElement(By.xpath("//input[@id = 'lastName']")).sendKeys(eData.get(0).get(1));
//		driver.findElement(By.xpath("//input[@id = 'chkLogin']")).click();
//		driver.findElement(By.xpath("//input[@id = 'user_name']")).sendKeys(eData.get(0).get(2));
//		driver.findElement(By.xpath("//input[@id = 'user_password']")).sendKeys(eData.get(0).get(3));
//		driver.findElement(By.xpath("//input[@id = 're_password']")).sendKeys(eData.get(0).get(4));
//		
//	}
//	@Then("^User clicks save button$")
//	public void user_clicks_save_button() {
//		driver.findElement(By.xpath("//input[@id = 'btnSave']")).click();
//	}
//	@Then("^close the browser$")
//	public void close_the_browser() {
//		driver.quit();
//	}
//	
//	
//}
