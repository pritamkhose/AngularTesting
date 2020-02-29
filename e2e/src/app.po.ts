import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  // getTitleText(): Promise<string> {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }

  getHomeText(): Promise<string> {
    return element(by.css('app-home h2')).getText() as Promise<string>;
  }

  getAboutButton() {
    return element(by.css('[routerlink="/about"]'));
  }

  getAboutText(): Promise<string> {
    return element(by.css('app-about h2')).getText() as Promise<string>;
  }
}
