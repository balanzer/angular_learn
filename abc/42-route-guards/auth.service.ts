export class AuthService {

  currentUserHasAccessTo(route) {

    // Pretend there's lots of logic here to decide if the
    // current user is allowed to access the specified route.

    // Change this from `true` to `false` to see how it affects
    // routing to 'admin'.
    return true;

  }

}
