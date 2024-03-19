describe('Registration Tests',()=>{
  it('positive registration test', ()=>{
    cy.fixture('example').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.get('[href="/registration"]>.button').should('be.visible').click()

      cy.log('Ввод логина')
      cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.existent_login_register)

      cy.log('Ввод почты')
      cy.get('.form-input--email')
        .type(data.existent_email)

      cy.log('Ввод пароля')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--password')
        .type(data.existent_password)

      cy.log('Повтор пароля')
      cy.get(':nth-child(4) > .form-control--medium > .form-input--password')
        .type(data.existent_password)

      cy.get('.form__buttons > :nth-child(4)').should('be.visible').click()

      cy.log('Ввод фамилии')
      cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text')
        .type(data.existent_surname)

      cy.log('Ввод имени')
      cy.get(':nth-child(2) > .form-control--medium > .form-input--text')
        .type(data.existent_name)

      cy.log('Ввод отчества')
      cy.get(':nth-child(3) > .form-control--medium > .form-input--text')
        .type(data.existent_patronymic)

      cy.get('.form__buttons > :nth-child(3)').should('be.visible').click()
    })
  })
})