import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: 'AIzaSyDellT7Nsj2OtXdk2DRsEl5wsKV-Y0s5ec',
  authDomain: 'chat-web-app-b6a60.firebaseapp.com',
  projectId: 'chat-web-app-b6a60',
  storageBucket: 'chat-web-app-b6a60.appspot.com',
  messagingSenderId: '506363500854',
  appId: '1:506363500854:web:50dcbe1ddec3b5f8e37b97',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
