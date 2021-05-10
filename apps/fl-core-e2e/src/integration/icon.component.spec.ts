describe('fl-core', () => {
  beforeEach(() => cy.visit('/iframe.html?id=iconcomponent--primary&knob-color&knob-size=18px&knob-name=home'));

  it('should render the component', () => {
    cy.get('fl-core-icon').should('exist');
  });
});
