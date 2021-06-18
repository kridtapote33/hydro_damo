var firebase = require('firebase')
// change lines below with your own Firebase snippets!
var config = {
  apiKey: "AIzaSyDKj2IQVBr85A2eWPUUbKxUZOiX9NHiCM8",
  authDomain: "hydro-3b018.firebaseapp.com",
  databaseURL: "https://hydro-3b018-default-rtdb.firebaseio.com",
  projectId: "hydro-3b018",
  storageBucket: "hydro-3b018.appspot.com",
  messagingSenderId: "1005033448393"
};
const fire = firebase.initializeApp(config);
module.exports = fire;
