describe('login', function() {
  beforeEach(function() {
    browser.get('/#/login');
  });


  it('should load the page', function() {
    expect(browser.getTitle()).toBe('Baby Steps');
  });
});
