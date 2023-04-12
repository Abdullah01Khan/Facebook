var firstname = ["SQA","ASE","QA","SE"]
var lastname = ["aa","bb","cc","dd"]
var email = ["aa@aa","bb@bb","cc@cc","dd@dd"]
var password = ["hey1","hey2","hey3","hey4"]

var x = Math.floor((Math.random() * 3)) + 1;
var y = Math.floor((Math.random() * 3)) + 1;
var z = Math.floor((Math.random() * 3)) + 1;
var a = Math.floor((Math.random() * 3)) + 1;

class newAccount {
    navigate(){
        cy.visit('https://www.facebook.com/')
    }

//Create Account function
    c_acc(){

        var first = firstname[x];
        var last = lastname[y];
        var mail = email[z];
        var pass = password[a];
        
//Covert urdu to english
        cy.get('.fcb > a').click()

//click on create account
        cy.get('[data-testid="open-registration-form-button"]').click()

//Randomly select the values of the form
        cy.get('[aria-label="First name"]').type(first).should('have.value', first)
        cy.get('[aria-label="Surname"]').type(last)
        cy.get('[aria-label="Mobile number or email address"]').click().type(mail)
        cy.get('#password_step_input').click().type(pass)
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
