describe('fl-core', () => {
  beforeEach(() => cy.visit('/iframe.html?id=labelcomponent--primary&knob-text=&knob-color=black&knob-fontSize=18px&knob-lower=true'));

  it('should render the component', () => {
    cy.get('fl-core-label').should('exist');
  });
});
