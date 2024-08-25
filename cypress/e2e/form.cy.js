describe('Form Submission', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('submits the form successfully', () => {
    cy.get('input#name').type('John Doe');
    cy.get('input#email').type('john@example.com');
    cy.get('button[type="submit"]').click();
    cy.get('p').contains('Form submitted successfully!');
  });

  it('shows an error if the name is missing', () => {
    cy.get('input#email').type('john@example.com');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('not.exist');
  });

  it('shows an error if the email is missing', () => {
    cy.get('input#name').type('John Doe');
    cy.get('button[type="submit"]').click();
    cy.get('p').should('not.exist');
  });
});
