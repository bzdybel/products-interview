context("HomePage should", () => {
  it("Header", () => {
    cy.visit(Cypress.env().baseUrl);
    cy.get(".logo");
    cy.get('[data-cy="search"]').type("generic");
    cy.get(".search-button").click();
    cy.get('[data-cy="active_checkbox"]').check({ force: true });
    cy.get('[data-cy="promo_checkbox"]').check({ force: true });
  });
});
