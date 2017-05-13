import { WorkOutPage } from './app.po';

describe('work-out App', () => {
  let page: WorkOutPage;

  beforeEach(() => {
    page = new WorkOutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
