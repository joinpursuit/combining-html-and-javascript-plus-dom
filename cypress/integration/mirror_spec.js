describe("Mirror-spec", () => {
  describe("1. String Mirror", () => {
    it("mirrors the entered string", () => {
      cy.get("#mirror-input")
        .type("Hello world!")
        .get("#mirror-form button")
        .click()
        .get("#mirror-output")
        .contains("Hello world!");
    });
  });

  describe("2. String Uppercaser", () => {
    it("uppercases the entered string", () => {
      cy.get("#uppercaser-input")
        .type("Hello world!")
        .get("#uppercaser-form button")
        .click()
        .get("#uppercaser-output")
        .contains("HELLO WORLD!");
    });
  });

  describe("3. Palindrome Detector", () => {
    it("displays true when the string is a palindrome", () => {
      cy.get("#palindrome-input")
        .type("tacocat")
        .get("#palindrome-form button")
        .click()
        .get("#palindrome-output")
        .contains("It is true that tacocat is a palindrome");
    });

    it("displays false when the string is not a palindrome", () => {
      cy.get("#palindrome-input")
        .type("nachodog")
        .get("#palindrome-form button")
        .click()
        .get("#palindrome-output")
        .contains("It is false that nachodog is a palindrome");
    });
  });

  describe("4. Even Checker", () => {
    it("displays true when the number is even", () => {
      cy.get("#even-checker-input")
        .type("42")
        .get("#even-checker-form button")
        .click()
        .get("#even-checker-output")
        .contains("It is true that 42 is even");
    });

    it("displays false when the number is even", () => {
      cy.get("#even-checker-input")
        .type("117")
        .get("#even-checker-form button")
        .click()
        .get("#even-checker-output")
        .contains("It is false that 117 is even");
    });
  });

  describe("5. Number Doubler", () => {
    it("displays the number doubled", () => {
      cy.get("#doubler-input")
        .type("12")
        .get("#doubler-form button")
        .click()
        .get("#doubler-output")
        .contains("12 doubled is 23");
    });
  });

  describe("6. Average of Three Numbers", () => {
    it("displays the average", () => {
      cy.get("#average-input-1")
        .type("10")
        .get("#average-input-2")
        .type("35")
        .get("#average-input-3")
        .type("45")
        .get("#average-form button")
        .click()
        .get("#average-output")
        .contains("The average of 10, 35, and 45 is 30");
    });
  });

  describe("Bonus: Vowel Remover", () => {
    it("removes vowels excluding y when the checkbox is not checked", () => {
      cy.get("vowel-remover-input")
        .type("happy days ahead")
        .get("#vowel-remover-form button")
        .click()
        .get("#vowel-remover-output")
        .contains("hppy dys hd");
    });

    it("removes vowels including y when the checkbox is checked", () => {
      cy.get("vowel-remover-input")
        .type("happy days ahead")
        .get("y-is-vowel-checkbox")
        .click()
        .get("#vowel-remover-form button")
        .click()
        .get("#vowel-remover-output")
        .contains("hpp ds hd");
    });
  });
});
