describe('template spec', () => {

  // Caso de teste: Login com sucesso:

  it('Success', () => {
    cy.visit("http://localhost:3000")
    cy.get('#username').type("Heath93")
    cy.get('#password').type("s3cret")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]')

  })

  // Caso de teste: Login inválido:

  it('Fail', () => {
    cy.visit("http://localhost:3000") 
    cy.get('#username').type("nomeerro")
    cy.get('#password').type("senhaerro")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="signin-error"]').contains("Username or password is invalid")
})

// Caso de teste: Registro de usuário:

it.skip('Registration', () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test= "signup"]').click()
    cy.get('#firstName').type("Rodrigo2")
    cy.get('#lastName').type("Meuamor2")
    cy.get('#username').type("RodrigoMeuamor2")
    cy.get('#password').type("123456789")
    cy.get('#confirmPassword').type("123456789")
    cy.get('[data-test="signup-submit"]').click()   
    cy.get('#username').type("RodrigoMeuamor2")
    cy.get('#password').type("123456789")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('#bankaccount-bankName-input').type("Bank Test")
    cy.get('#bankaccount-routingNumber-input').type("123456789")
    cy.get('#bankaccount-accountNumber-input').type("123456789")
    cy.get('[data-test="bankaccount-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]')


})

// Caso de teste: Registro de usuário, informações incompletas:

it('Incomplete Registration', () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test= "signup"]').click()
    cy.get('#lastName').click()
    cy.get('#username').click()
    cy.get('#password').click()
    cy.get('#confirmPassword').click()
    cy.get('[data-test="signup-submit"]').click({force: true})



})

})