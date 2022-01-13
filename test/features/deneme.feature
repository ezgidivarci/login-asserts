Feature: Login test

    Scenario: Go to modanisa website and test login page
        Given go to  modanisa homepage
        And click login section
        And go to modanisa login website
        And enter phone
        And enter password
        When press enter
        Then verify succes message

    Examples:
        |


