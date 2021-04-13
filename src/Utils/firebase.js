import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAhcIpkb99ZACURltPAx3z3L1_ZRMr54ys",
    authDomain: "ongdv-brewery.firebaseapp.com",
    projectId: "ongdv-brewery",
    storageBucket: "ongdv-brewery.appspot.com",
    messagingSenderId: "573267818458",
    appId: "1:573267818458:web:51da0be2051c4faf61f2e3"
  };

export default firebase.default.initializeApp(firebaseConfig);