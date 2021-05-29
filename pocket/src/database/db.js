import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHk2QXSeNOqgP-K-sz_JRN9DCM_kfecFs",
    authDomain: "komugico-pocket.firebaseapp.com",
    projectId: "komugico-pocket",
    storageBucket: "komugico-pocket.appspot.com",
    messagingSenderId: "67764528158",
    appId: "1:67764528158:web:6b73940c8d132d2aa83a0f"
}

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const login = async (email, password, history) => {
    try {
        await app.auth().signInWithEmailAndPassword(email, password);
        alert("success");
        history.push("/");
    }
    catch (error) {
        alert(error);
    }
}

export const signup = async (email, password, history) => {
    try {
        await app.auth().createUserWithEmailAndPassword(email, password);
        alert("success");
        history.push("/");
    }
    catch (error) {
        alert(error);
    }
}

export const logout = async (history) => {
    try {
        await app.auth().signOut();
        alert("success");
        history.push("/");
    }
    catch (error) {
        alert(error);
    }
}

export const getUser = async (setUser) => {
    try {
        await app.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
        });
    }
    catch (error) {
        alert(error);
    }
}