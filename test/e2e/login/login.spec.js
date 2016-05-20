describe('login', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080/#/login');
    browser.driver.sleep(2000);
  });

  it('should travel to the login page', function() {
    expect(element(by.css('.logo')).getText()).toBe('login');
  });

});
