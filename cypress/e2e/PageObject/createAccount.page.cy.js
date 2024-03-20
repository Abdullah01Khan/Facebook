/*
var firstname = ["SQA","ASE","QA","SE"]
var lastname = ["aa","bb","cc","dd"]
var email = ["aa@aa","bb@bb","cc@cc","dd@dd"]
var password = ["hey1","hey2","hey3","hey4"]

firstname = firstname[ Math.floor((Math.random() * firstname.length))];
lastname = lastname[ Math.floor((Math.random() * lastname.length))];
email = email[ Math.floor((Math.random() * email.length))];
password = password [ Math.floor((Math.random() * password.length))];

*/

const result = Math.random().toString(36).substring(2,7);

class newAccount {
    navigate(){
        cy.visit('https://www.facebook.com/')
    }

//Create Account function
    c_acc(){

//Covert urdu to english
        cy.get('.fcb > a').click()

//click on create account
        cy.get('[data-testid="open-registration-form-button"]').click()

//Randomly select the values of the form
        cy.get('[aria-label="First name"]').type(result).should('have.value', result)
        cy.get('[aria-label="Surname"]').type(result)
        cy.get('[aria-label="Mobile number or email address"]').click().type(result)
        cy.get('#password_step_input').click().type(result)
    }

//Add Date of birth and gender
    D0B(){
        cy.get('#day').select('3').should('have.value','3')
        cy.get('#year').select('2000').should('have.value','2000')
        cy.get(':nth-child(2) > ._58mt').click()

//Click on the Signup button
        cy.get('._1lch').contains('Sign Up').click()
    }


}
export default newAccount
