Feature: Login

Scenario: User logging in
  Given I am a user attempting to log into my favorite app
  When I type "Elon" as username
  Then loggin button should still be disabled
  When I type "Musk" as password
  Then loggin button should be enabled
  When I click on loggin button
  Then username field should be disabled
  And password field should be disabled
  And loggin button should be disabled
  And content should display "Hey you are now logged in !"
