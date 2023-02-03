@restAPI
Feature: Data Driven tests
  I would like to execute data driven tests

  Scenario: I can verify the URL returns a status code of 404
    Given that I try to access an incorrect URL
    Then I should receive a status code from the API

  Scenario Outline: I can verify the URL status code
    Given I have the <endpoint>
    Then I should receive a <statusCode> from the endpoint
    Examples:
    | endpoint                                                                      | statusCode |
    | /us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379 | 200        |
    | /us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=098734232 | 404        |