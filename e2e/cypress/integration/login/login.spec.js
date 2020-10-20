context("Login should", () => {
  it("Fulfielld inputs", () => {
    cy.visit(`${Cypress.env().baseUrl}/login`);
    cy.get('input[id="username"]').type("kyle.simpson@outlook.com");
    cy.get('input[id="password"]').type("youdontknowjs");
  });
});
