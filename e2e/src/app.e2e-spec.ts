import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('AngularTesting app is running!');
  // });

  it('should display Home page', () => {
    page.navigateTo();
    // browser.pause();
    expect(page.getHomeText()).toEqual('Home Page');
  });

  it('should display About Button', () => {
    page.navigateTo();
    expect(page.getAboutButton().getText()).toEqual('About');
  });

  it('should display About page', () => {
    page.navigateTo();
    page.getAboutButton().click();
    expect(page.getAboutText()).toEqual('About Page');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
