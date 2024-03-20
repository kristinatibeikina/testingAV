describe('Negative registration Tests',()=>{
  it('negative registration test', ()=>{
    cy.fixture('example').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.get('[href="/registration"]>.button').should('be.visible').click()

      cy.log('Ввод неверного логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.none_existent_login)

      cy.log('Ввод неверной почты')
      cy.get('.form-input--email')
        .type(data.none_existent_email)

      cy.log('Ввод неверного пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(data.none_existent_password)

      cy.log('Повтор пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(data.existent_password)
        
      cy.get('.form__buttons > :nth-child(4)').should('be.disabled').click()

      cy.get(':nth-child(1) > .form-error > span').should('contain','Обязательное поле, символы латиницы, не содержит пробелы')

      cy.get(':nth-child(2) > .form-error > span').should('contain','Обязательное поле, некорректная почта')

      cy.get(':nth-child(3) > .form-error > span').should('contain','Обязательное поле, мин 6 символов, должен содержать буквы в верхнем и нижнем регистре, минимум 1 цифру, не содержать пробелы')

      cy.get(':nth-child(4) > .form-error > span').should('contain','Пароли не совпадают')

      
    })
  })
})