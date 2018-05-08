export const AuthService = {
  isAuthenticated: false,
  currentUser: {
    name: "anonymous",
    uid: ""
  },

  auth(cb) {
    this.isAuthenticated = true;
    this.currentUser = {
      name: "user one",
      id: "1"
    };
    setTimeout(cb, 100);
  },

  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
