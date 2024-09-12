import ApiPages from '../pages/apiPages.js'
describe('template spec', () => {
  
  const apiPages = new ApiPages();

  beforeEach(() => {
    // Load fixture data before each test
    cy.fixture('example.json').as('data');
  });

  it('passes', () => {
    cy.visit('https://www.flipkart.com/')
    cy.title().should('include','Online Shopping');
    cy.get('input[name="q"]').type('mobiles{enter}')
    // cy.get('span.BUOuZu').contains('Showing').find('span').should('have.text','mobiles')
    // cy.xpath('//span[contains(text(), "Showing")]/following-sibling::span').should('have.text', 'mobiles');
    cy.xpath('//span[@class="BUOuZu" and contains(text(), "Showing")]/span')
      .should('have.text', 'mobiles');
    cy.checkCheckboxByLabel('Apple')
    // Access fixture data using 'this.data'
    cy.get('@data').then((data) => {
      const userName = data.name; // Access the data from the fixture          
      expect(userName).to.equal('Using fixtures to represent data');     
    });

    //call POM
    apiPages.getusers()
    
  })
})