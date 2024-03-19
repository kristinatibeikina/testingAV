describe('Cypress Test',()=>{
  it('login test',()=>{
    cy.fixture('cypressTest').then(data=>{
      cy.log('Переход на страницу авторизации')
      cy.visit(data.main_url)

      cy.log('Ввод несуществующего логина')
      cy.get('input[class="form-input--text form-input"]')
        .type(data.none_existent_login)

      cy.log('Клик по кнопке войти')
      cy.get('div[class="login-form__button"] button[type="submit"]')
        .click()

      cy.log('Элемент ошибки')
      cy.get('div[class="form-error form-error-- form-error-- form-error--"]')
        .should('exist')
    })
  })
})