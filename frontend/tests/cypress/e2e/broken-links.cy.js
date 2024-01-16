//broken-link.cy.js

describe('Broken Links Test', () => {

  beforeEach(() => {

    cy.viewport(1280, 1000)

  })

  it('Find all broken links', () => {

    cy.visit('https://opensource.saucelabs.com/elemental-next/')

    cy.get('a').each(link => {

      if (link.prop('href'))

        cy.request({

          url: link.prop('href'),

          failOnStatusCode: true

        })

      cy.log( link.prop('href'))

    })

  })

})