describe('Role Employer Tests',()=>{
  it('positive role employer test', ()=>{
    cy.fixture('example').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.get('[href="/login"] > .button').should('be.visible').click()

      cy.log('Ввод логина')
      cy.get('.form-input--text')
        .type(data.existent_login_employe)

      cy.log('Ввод пароля')
      cy.get('.form-input--password')
        .type(data.existent_password_employe)

      cy.log('Отправка данных на проверку')
      cy.get(':nth-child(3) > .button').should('be.visible').click()

      cy.log('Переход на выбор роли')
      cy.get('.page-nav__role-block > .button').should('be.visible').click()

      cy.log('Выбираем роль работодатель')
      cy.get('.select-role-form > :nth-child(1)').should('be.visible').click()

      cy.log('Создаем кобинет работодателя')
      cy.get('.variants-company > :nth-child(2)').should('be.visible').click()

      cy.log('Название компании')
      cy.get(':nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.title_compani)

      cy.log('Адрес')
      cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
        .type(data.title_compani)

      cy.log('Краткое описание')
      cy.get('.form-area')
        .type(data.title_compani)
      
      cy.get('.create-company-form__description-block > .button').should('be.visible').click()

      
    })
  })
})