describe("Page d'accueil", () => {
    it("Affiche les éléments requis", () => {
        cy.visit("/");
        cy.contains("Sommaire");
    });
});
