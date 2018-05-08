export default class FbAPI {
  static getUserInfo(uid) {
    if (uid === "1") {
      return {
        username: "user one",
        email: "u_one@mail.com"
      };
    }

    return null;
  }
}
