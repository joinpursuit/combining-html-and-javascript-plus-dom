describe('Mirror-spec', () => {
  describe('1. String Mirror', () => {
    it('mirrors the entered string', () => {
      cy.get('#mirror-input')
        .clear()
        .type('Hello world!')
        .get('#mirror-button')
        .click()
        .get('#mirror-output')
        .contains('Hello world!');
    });
  });

  describe('2. String Uppercaser', () => {
    it('uppercases the entered string', () => {
      cy.get('#uppercaser-input')
        .clear()
        .type('Hello world!')
        .get('#uppercaser-button')
        .click()
        .get('#uppercaser-output')
        .contains('HELLO WORLD!');
    });
  });

  describe('3. Palindrome Detector', () => {
    it('displays true when the string is a palindrome', () => {
      cy.get('#palindrome-input')
        .clear()
        .type('tacocat')
        .get('#palindrome-button')
        .click()
        .get('#palindrome-output')
        .contains('It is true that tacocat is a palindrome');
    });

    it('displays false when the string is not a palindrome', () => {
      cy.get('#palindrome-input')
        .clear()
        .type('nachodog')
        .get('#palindrome-button')
        .click()
        .get('#palindrome-output')
        .contains('It is false that nachodog is a palindrome');
    });
  });

  describe('4. Even Checker', () => {
    it('displays true when the number is even', () => {
      cy.get('#even-checker-input')
        .clear()
        .type('42')
        .get('#even-checker-button')
        .click()
        .get('#even-checker-output')
        .contains('It is true that 42 is even');
    });

    it('displays false when the number is even', () => {
      cy.get('#even-checker-input')
        .clear()
        .type('117')
        .get('#even-checker-button')
        .click()
        .get('#even-checker-output')
        .contains('It is false that 117 is even');
    });
  });

  describe('5. Number Doubler', () => {
    it('displays the number doubled', () => {
      cy.get('#doubler-input')
        .clear()
        .type('12')
        .get('#doubler-button')
        .click()
        .get('#doubler-output')
        .contains('12 doubled is 24');
    });
  });

  describe('6. Average of Three Numbers', () => {
    it('displays the average', () => {
      cy.get('#average-input-1')
        .clear()
        .type('10')
        .get('#average-input-2')
        .clear()
        .type('35')
        .get('#average-input-3')
        .clear()
        .type('45')
        .get('#average-button')
        .click()
        .get('#average-output')
        .contains('The average of 10, 35, and 45 is 30');
    });
  });
});
