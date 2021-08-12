import firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyCvNlH5lJT_8yY5BTS21OR4yE-x3vJm5kw',
  authDomain: 'capsules-36ebc.firebaseapp.com',
  projectId: 'capsules-36ebc',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);