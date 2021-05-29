import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHk2QXSeNOqgP-K-sz_JRN9DCM_kfecFs",
    authDomain: "komugico-pocket.firebaseapp.com",
    projectId: "komugico-pocket",
    storageBucket: "komugico-pocket.appspot.com",
    messagingSenderId: "67764528158",
    appId: "1:67764528158:web:6b73940c8d132d2aa83a0f"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;