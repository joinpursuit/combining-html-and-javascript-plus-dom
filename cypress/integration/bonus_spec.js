describe("Bonus: Vowel Remover", () => {
  it("removes vowels excluding y when the checkbox is not checked", () => {
    cy.get("#vowel-remover-input")
      .clear()
      .type("happy days ahead")
      .get("#vowel-remover-form button")
      .click()
      .get("#vowel-remover-output")
      .contains("hppy dys hd");
  });

  it("removes vowels including y when the checkbox is checked", () => {
    cy.get("#vowel-remover-input")
      .clear()
      .type("happy days ahead")
      .get("#y-is-vowel-checkbox")
      .click()
      .get("#vowel-remover-form button")
      .click()
      .get("#vowel-remover-output")
      .contains("hpp ds hd");
  });
});
