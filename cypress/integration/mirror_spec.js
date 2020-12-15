describe('Mirror-spec', () => {
    it("Mirrors an entered string", () => {
      cy
      .get('#mirror-input')
      .type('Hello world!')
      .get("#mirror-form button")
      .click()
      .get('#mirror-output')
      .contains('Hello world!')
    })
})
