describe('Role Student Tests',()=>{
  it('positive role student test', ()=>{
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

      cy.log('Отправка данных на проверку')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

      cy.log('Переход на выбор роли')
      cy.get('.page-nav__role-block > .button').should('be.visible').click()

      cy.log('Выбираем роль студент')
      cy.get('.select-role-form > :nth-child(3)').should('be.visible').click()
    })
  })
})