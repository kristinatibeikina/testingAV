describe('Role Tests',()=>{
  it('positive role test', ()=>{
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

      cy.log('Переход в просмотр уведомлений')
      cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').should('be.visible').click()

      cy.log('Читаем уведомления')
      cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').should('be.visible').click()
    })
  })
})