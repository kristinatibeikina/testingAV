describe('Authorization Tests',()=>{
  it('positive authorization test', ()=>{
    cy.fixture('example').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.get('[href="/login"] > .button').should('be.visible').click()

      cy.log('Ввод логина')
      cy.get('.form-input--text')
        .type(data.existent_login)

      cy.log('Ввод пароля')
      cy.get('.form-input--password')
        .type(data.existent_password)

      cy.get('.form__buttons > :nth-child(3)').should('be.visible').click()

      cy.url().should('include','/account/main')
    })
  })
})