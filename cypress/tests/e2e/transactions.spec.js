describe('template spec', () => {

  //visualizar histórico de transações de um usuário, com transações realizadas

  it('with transactions', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type("Heath93")
    cy.get('#password').type("s3cret")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[role="grid"]')

  })

  //visualizar histórico de transações de um usuário, sem transações realizadas

it.skip('no transactions', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test= "signup"]').click()
    cy.get('#firstName').type("vinde")
    cy.get('#lastName').type("vindevinde")
    cy.get('#username').type("vindevinde")
    cy.get('#password').type("123456789")
    cy.get('#confirmPassword').type("123456789")
    cy.get('[data-test="signup-submit"]').click()
    cy.get('#username').type("vindevinde")
    cy.get('#password').type("123456789")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('#bankaccount-bankName-input').type("Bank Test2")
    cy.get('#bankaccount-routingNumber-input').type("123456789")
    cy.get('#bankaccount-accountNumber-input').type("123456789")
    cy.get('[data-test="bankaccount-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]')
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]').click()
    cy.get('[data-test="empty-list-header"]').contains("No Transactions") 
      })



})
    

    