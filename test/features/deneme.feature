Feature: Login test

    Scenario: Go to modanisa website and test login page
        Given go to modanisa website
        And click login section
        And enter phone
        And enter password
        When press enter
        Then verify succes message


