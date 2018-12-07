import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

var config = {
    apiKey: "AIzaSyCZqWNS0p_CoM9y2Jec_PdVnIKthB3z-Bc",
    authDomain: "vue-firestore-cd244.firebaseapp.com",
    databaseURL: "https://vue-firestore-cd244.firebaseio.com",
    projectId: "vue-firestore-cd244",
    storageBucket: "vue-firestore-cd244.appspot.com",
    messagingSenderId: "668685739082"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
