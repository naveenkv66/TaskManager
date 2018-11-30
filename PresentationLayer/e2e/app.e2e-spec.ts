import { PresentationLayerPage } from './app.po';

describe('presentation-layer App', () => {
  let page: PresentationLayerPage;

  beforeEach(() => {
    page = new PresentationLayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
