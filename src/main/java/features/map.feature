#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@FunctionalTest
Feature: Automation LoginMap Feature


@SmokeTest @RegressionTest
 Scenario: Automation LoginMap Test Scenario
 
    Given Mapuser is already on login page
    When Maptitle is "Login - My Store"
    Then Mapuser enters username and passsword
    |username                  |password|
    | rmanharbhaj@thebrick.com | Ridje123 | 
    | rj123@gmail.com          | rj123    |
    
		Then Mapuser quit

@SmokeTest @SanityTest	
Scenario: Automation sign in Test
		Given user is on Sign in page	
		
	
Scenario: Automation Home Page Test
		Given user is Home page		
		
