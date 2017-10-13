import { TryCompPage } from './app.po';

describe('try-comp App', function() {
  let page: TryCompPage;

  beforeEach(() => {
    page = new TryCompPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
