import { AlexandreNicolPage } from './app.po';

describe('alexandre-nicol App', () => {
  let page: AlexandreNicolPage;

  beforeEach(() => {
    page = new AlexandreNicolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
