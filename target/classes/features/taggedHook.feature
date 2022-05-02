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
@tag
Feature: Dresses page Test
  

  @Contact
  Scenario: 
    Given ruser is on home page and hometitle is "My account - My Store"
    Then user clicks on contact page
    Then user enter details
    Then user clicks on send button
    
   @Dresses
  Scenario:
    Given duser is on dresses page and title is "Dresses - My Store"
    Then user clicks on casual dresses
    Then user checked the any size checkbox

  
