import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAMDFQ2zARz7QhNErFblIriMyexDqvnl0I",
  authDomain: "pnddemo-f1c73.firebaseapp.com",
  databaseURL: "https://pnddemo-f1c73.firebaseio.com",
  projectId: "pnddemo-f1c73",
  storageBucket: "pnddemo-f1c73.appspot.com",
  messagingSenderId: "107256350100"
};

if (!firebase.apps.lenth) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
