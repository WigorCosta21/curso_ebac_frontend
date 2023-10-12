/// <reference types="cypress" />

describe("Test to edit contact", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/")
  })

  it("Must edit a contact", () => {
    cy.get(".edit").first().click()
    cy.get("input[type='text']").clear()
    cy.get("input[type='text']").type("Thiago M. Pedro")
    cy.get("input[type='email']").clear()
    cy.get("input[type='email']").type("tmachado807@gmail.com.br")
    cy.get("input[type='tel']").clear()
    cy.get("input[type='tel']").type("11941612130")
    cy.get(".alterar").click()
    cy.screenshot("edit-contact")
  })

})