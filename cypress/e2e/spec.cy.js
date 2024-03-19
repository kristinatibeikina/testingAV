describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dev.profteam.su')
  })
})

describe('Registration Tests',()=>{
  it('positive registration test', ()=>{
    cy.fixture('cypressTest').then(data=>{
      cy.log('Переход на сайт')
      cy.visit(data.main_url)

      cy.get('[href="/registration"]>.button').should('be.visible').click()
    })
  })
})