import { browser, element, by } from 'protractor';

export class UserListAppPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getTitle() {
    let header = by.css('h2');
    return element(header).getText();
  }

  getUnorderedList() {
    let list = by.css('ul');
    return element(list).isPresent();
  }

  getClearButton() {
    let button = by.css('button');
    return element(button);
  }

  getUsers() {
    let item = by.css('li');
    return element.all(item);
  }
}
