describe('fl-core', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&knob-type&knob-color&knob-textColor&knob-text=&knob-loadingText=loading..&knob-disabled=false&knob-icon&knob-tabindex&knob-loading=false&knob-testId&knob-colorScheme'));

  it('should render the component', () => {
    cy.get('fl-core-button').should('exist');
  });
});
