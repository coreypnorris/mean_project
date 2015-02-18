describe('angularjs homepage', function() {
    it('should have a title', function() {
        browser.get('http://localhost:5000/#/home');

        expect(browser.getTitle()).toEqual('Flapper News');
    });
});