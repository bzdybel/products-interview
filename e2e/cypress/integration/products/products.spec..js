
context("Products should", () => {
  it("Header", () => {
    cy.visit(Cypress.env().baseUrl);
    cy.get('[data-cy="search"]').type("generic");
    cy.get(".search-button").click();
    cy.get(".product-title").contains("generic", { matchCase: false });
    cy.get('[data-cy="active_checkbox"]').check({ force: true });
    cy.get('[data-cy="unavailable"]').should("not.exist");
    cy.get('[data-cy="promo_checkbox"]').check({ force: true });
    cy.get(".products-container > .product-container > .top").each(e=> expect(e.text()).to.equal('Promo') )
  });

  it("Details", () => {
    cy.visit(Cypress.env().baseUrl);
    cy.get('[data-cy="search"]').type("generic");
    cy.get(".search-button").click();
    cy.get(".product-title").contains("generic", { matchCase: false });
    cy.get('[data-cy="active_checkbox"]').check({ force: true });
    cy.get('[data-cy="unavailable"]').should("not.exist");
    cy.get('[data-cy="promo_checkbox"]').check({ force: true });
    cy.get(".products-container > .product-container > .top").each(e=> expect(e.text()).to.equal('Promo') )
  });

    it("Empty page", () => {
      cy.visit(Cypress.env().baseUrl);
  
      cy.get('[data-cy="search"]').type("Incorrect text for empty results");
      cy.get(".search-button").click();
      cy.get(".bag-empty");
      cy.get(".empty-label").contains("Ooops... It's empty here");
      cy.get(".empty-paragraph").contains("There are no products on the list");
    });
});
