describe('Negative Role Student Tests',()=>{
  it('negative role student test', ()=>{
    cy.fixture('example').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.get('[href="/login"] > .button').should('be.visible').click()

      cy.log('Ввод логина')
      cy.get('.form-input--text')
        .type(data.none_authorization_login)

      cy.log('Ввод пароля')
      cy.get('.form-input--password')
        .type(data.none_authorization_password)

      cy.log('Отправка данных на проверку')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

  
    })
  })
})