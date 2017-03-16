import { UserListAppPage } from './app.po';

describe('user-list-app App', function() {
  let page: UserListAppPage;

  beforeEach(() => {
    page = new UserListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
