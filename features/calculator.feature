Feature: Calculator
In order to avoid making mistakes
As a math student
I want to be told the sum of two numbers

Scenario: Add two numbers
  Given I have two numbers 3 and 5
  When I add the numbers
  Then I should get the result 8

Scenario: Add more numbers
  Given I have two numbers 30 and 15
  When I add the numbers
  Then I should get the result 45
