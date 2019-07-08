package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="/Users/tanu/eclipse-workspace/FreeCRMBDDFramework/src/main/java/Features/create_user.feature", //the path of feature file 
				glue= {"stepDefinition"}, //the path of stepDefinition file
				format={"pretty", "html:test-output", "json:json-output/cumcumber.json", "junit:junit-output/cucumber.junit"}, //to generate different types of reporting
				strict = true, // it will check if any step is not defined in step definition file
				dryRun = false , // dryRun should be false to execute the test, it checks one to one mapping between feature file and step def file 
				monochrome = true // display the output in readable format
				)




public class TestRunner {

}
