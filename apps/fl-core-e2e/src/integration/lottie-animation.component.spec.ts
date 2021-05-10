describe('fl-core', () => {
  beforeEach(() => cy.visit('/iframe.html?id=lottieanimationcomponent--primary&knob-width=14&knob-height=14&knob-animationPath'));

  it('should render the component', () => {
    cy.get('fl-core-lottie-animation').should('exist');
  });
});
