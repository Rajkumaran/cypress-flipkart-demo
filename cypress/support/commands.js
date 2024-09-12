// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('checkCheckboxByLabel', (labelText) => {
    cy.contains('div._6i1qKy', labelText)
      .parent() // Navigate to the parent div
      .find('input[type="checkbox"]') // Find the checkbox input
      .then($checkbox => {
        // Check the checkbox if it's not already checked
        if (!$checkbox.is(':checked')) {
          $checkbox[0].click(); // Click the checkbox to check it
          
        }
      });
  });