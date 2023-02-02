
@janusBeta
@productionSafe
@webDriver
Feature: Janus Obit
  In order to confirm the Obit
  I would like to be able to interact with items on the page

Scenario: Verify Obit
  Given I am on a Janus Obituary page
  Then I should see a name in the heading
  
Scenario: Add an entry to the guestbook
  Given I'm on a Janus Obituary page
  When I scroll to the guestbook section of the page
  Then I should be able to add a new entry to the guestbook

Scenario: Fetch data from endpoint
  Given I access an endpoint
  Then I should receive data from that endpoint