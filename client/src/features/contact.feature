Feature: Contact

Scenario: User contact in
  Given I am a user trying to contact El Professor
  When I type "Paris" as City Name
  When I type "wall street" as what i want to rob
  When I type "computer science" as chosen field
  Then contact button should be enabled
  When I click on contact button
  And content should display Thank you !