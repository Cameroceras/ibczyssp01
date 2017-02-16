import { Ibczyssp01Page } from './app.po';

describe('ibczyssp01 App', function() {
  let page: Ibczyssp01Page;

  beforeEach(() => {
    page = new Ibczyssp01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
