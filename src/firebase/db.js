import firebase from 'firebase/app'
import 'firebase/firestore'
//Paste in your firebase config we copied from the last step
var firebaseConfig = {
    apiKey: "AIzaSyB8ESK5pa4ImnQfpr98HJXPy1hNZB2Jm98",
    authDomain: "parth-todos.firebaseapp.com",
    databaseURL: "https://parth-todos.firebaseio.com",
    projectId: "parth-todos",
    storageBucket: "parth-todos.appspot.com",
    messagingSenderId: "1010135153261",
    appId: "1:1010135153261:web:b4c21a42b8e0a724979d64"
};
// Get a Firestore instance
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }