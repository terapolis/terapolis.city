import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyBtwfkkzAFpsAKwEohDxeiSKdjLwi9Do7E',
  authDomain: 'terapolis-db.firebaseapp.com',
  databaseURL: 'https://terapolis-db.firebaseio.com',
  projectId: 'terapolis-db',
  storageBucket: 'terapolis-db.appspot.com',
  messagingSenderId: '367956236908'
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
