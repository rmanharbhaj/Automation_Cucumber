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

Feature: Automation Login Feature
 

 #(1)----------------Simple data driven - without examples-----------*
 
  #Scenario: Automation Login Test Scenario
    #Given user is already on login page
    #When title is "Login - My Store"
    #Then user enters "rmanharbhaj@thebrick.com" and "Ridje123"
    #Then user clicks on signIn button
    #Then user is on home page
		#Then user quit
		
 #(2)----------------Simple data driven - with examples + Scenario Outline-----------*	
 
	#Scenario Outline: Automation Login Test Scenario
    #Given user is already on login page
    #When title is "Login - My Store"
    #Then user enters "<username>" and "<password>"
    #Then user clicks on signIn button
    #Then user is on home page
#		Then user quit
#		
 #Examples: 
      #| username | password | 
      #| rmanharbhaj@thebrick.com | Ridje123 | 
      #| rj123@gmail.com          | rj123    |
      
      
  #(3)*----------------Simple data driven - with table-----------*
  
  Scenario: Automation Login Test Scenario
    Given user is already on login page
    When title is "Login - My Store"
    Then user enters username and passsword
    | rmanharbhaj@thebrick.com | Ridje123 | 
    #| rj123@gmail.com          | rj123    |
    Then user clicks on signIn button
    Then user is on home page
		Then user quit

