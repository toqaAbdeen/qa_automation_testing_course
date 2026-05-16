/// <reference types="cypress"/>
describe('Check login functionality - Lesson 1', () => {

    it('Verify telerik.com', () => {
        cy.visit("https://www.telerik.com/support/demos")
        cy.get(".u-s-mb0")// find the element with the class u-s-mb0
        cy.get(".NavAlt-anchor").contains("Reporting & Docs") // find the element with the class NavAlt-anchor that contains the text Reporting & Docs
        cy.get(".TK-Aside-Menu-Link").last() // find the last element with the class TK-Aside-Menu-Link
        cy.get('a[title="Search"]') // find the element with the tag name a and the attribute title that has the value Search
        // cy.get("h2").filter(".u-mb0").eq(5) // find the element with the tag name h2 and filter it by the class u-s-mb0
        // cy.get('a[title="Get it on Google Play"]')
        cy.get(".TK-Footer-List-Social").eq(0)
    })
})
