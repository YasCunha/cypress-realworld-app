describe('template spec', () => {
  it('sufficient balance', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type("Heath93")
    cy.get('#password').type("s3cret")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]')
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').click()
    cy.get('[data-test="user-list-search-input"]').type("Lia")
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click()
    cy.get('#amount').type("10")
    cy.get('#transaction-create-description-input').type("note")
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('[data-test="alert-bar-success"]')
  })

  it('insufficient balance', () => {
    cy.visit('http://localhost:3000')
    cy.get('#username').type("Heath93")
    cy.get('#password').type("s3cret")
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-public-tab"]')
    cy.get('[data-test="nav-contacts-tab"]')
    cy.get('[data-test="nav-personal-tab"]')
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').click()
    cy.get('[data-test="user-list-search-input"]').type("Lia")
    cy.get('[data-test="user-list-item-WHjJ4qR2R2"]').click()
    cy.get('#amount').type("3000")
    cy.get('#transaction-create-description-input').type("note")
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get('[data-test="alert-bar-success"]')

  })



    })

