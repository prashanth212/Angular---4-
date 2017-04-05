import { AngularApp4Page } from './app.po';

describe('angular-app4 App', () => {
  let page: AngularApp4Page;

  beforeEach(() => {
    page = new AngularApp4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
