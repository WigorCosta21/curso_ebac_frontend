/// <reference types="cypress" />

describe("Test to remove contact", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/")
  })

  it("Must remove a contact", () => {
    cy.get(".delete").first().click()
    cy.screenshot("remove-contact")
  })
})