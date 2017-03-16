import { UserListAppPage } from './app.po';

describe('User List App', () => {
  let userListAppPage = new UserListAppPage();

  beforeEach(() => {
    userListAppPage.navigateTo();
  })

  it('should have a title', () => {
    let title = userListAppPage.getTitle();

    expect(title).toBe('Users Online Now');
  })

  it('should have an unordered list', () => {
    let listElement = userListAppPage.getUnorderedList();

    expect(listElement).toBeTruthy();
  })

  it('should have 16 users in the default list', () => {
    let total = 16;
    let clearButton = userListAppPage.getClearButton();
    let users = userListAppPage.getUsers();

    clearButton.click();

    expect(users.count()).toBe(total);
  })
})
