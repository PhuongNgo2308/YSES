import { auth } from "../services/firebase.js";

// sign up
export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

//sign in
export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// sign out
export const signOut = () => auth.signOut();

// reset password
export const resetPassword = email => auth.sendPasswordResetEmail(email);

// update password
export const updatePassword = newPassword =>
  auth.currentUser.updatePassword(newPassword);
