import { PrimengRc5Page } from './app.po';

describe('primeng-rc5 App', function() {
  let page: PrimengRc5Page;

  beforeEach(() => {
    page = new PrimengRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
