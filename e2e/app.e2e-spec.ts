import { MaterialDesignDemoPage } from './app.po';

describe('material-design-demo App', () => {
  let page: MaterialDesignDemoPage;

  beforeEach(() => {
    page = new MaterialDesignDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
