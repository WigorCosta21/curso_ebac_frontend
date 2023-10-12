/// <reference types="cypress" />

describe("Test to add contact", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/")
  })

  it("Must add a contact", () => {
    cy.get("input[type='text']").type("Wigor")
    cy.get("input[type='email']").type("wigor@teste.com")
    cy.get("input[type='tel']").type("11 12345678")
    cy.get(".adicionar").click()
    cy.screenshot("add-contact")
  })

})