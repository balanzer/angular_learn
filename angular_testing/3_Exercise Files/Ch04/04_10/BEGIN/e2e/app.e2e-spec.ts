import { browser, element, by } from 'protractor';

describe('User List App', () => {

  beforeEach(() => {
    browser.get('/dashboard');
  })

  it('should have a title', () => {
    let header = by.css('h2');
    let title = element(header).getText();

    expect(title).toBe('Users Online Now');
  })

  it('should have an unordered list', () => {
    let list = by.css('ul');
    let listElement = element(list).isPresent();

    expect(listElement).toBeTruthy();
  })

  it('should have 16 users in the default list', () => {
    let total = 16;
    let button = by.css('button');
    let item = by.css('li');
    let clearButton = element(button);
    let users = element.all(item);

    clearButton.click();

    expect(users.count()).toBe(total);
  })
})
