describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("/");
    cy.get("[data-cy=main-layout-products]").click();
    cy.url().should("include", "/products");
  });
});
