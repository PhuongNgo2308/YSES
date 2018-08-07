// import firebase modules
import firebase from "firebase";

import * as CONFIG from "../global/CONFIG";

const devConfig = {
  apiKey: "AIzaSyAcIjJKAcSTQOk76vB6OxbQg19_LOcCBzM",
  authDomain: "yses-dev.firebaseapp.com",
  databaseURL: "https://yses-dev.firebaseio.com",
  projectId: "yses-dev",
  storageBucket: "yses-dev.appspot.com",
  messagingSenderId: "674513128733"
};

const prodConfig = {
  // apiKey: "AIzaSyAcIjJKAcSTQOk76vB6OxbQg19_LOcCBzM",
  // authDomain: "yses-dev.firebaseapp.com",
  // databaseURL: "https://yses-dev.firebaseio.com",
  // projectId: "yses-dev",
  // storageBucket: "yses-dev.appspot.com",
  // messagingSenderId: "674513128733"
};

const env = CONFIG.ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(env);
}

const auth = firebase.auth();

export { auth };
