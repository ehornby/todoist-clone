import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCVY-Gil0JL133nifOExq57GNQtCkSw2_4",
    authDomain: "todoist-4b6b4.firebaseapp.com",
    databaseURL: "https://todoist-4b6b4.firebaseio.com",
    projectId: "todoist-4b6b4",
    storageBucket: "todoist-4b6b4.appspot.com",
    messagingSenderId: "891372878611",
    appId: "1:891372878611:web:bc4a722cc9d057030678e6"
});

export { firebaseConfig as firebase };