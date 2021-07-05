import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUNwT3T3_TgTRqxktvC2f-PR-KedQImp0",
    authDomain: "drive-clone-a79bf.firebaseapp.com",
    projectId: "drive-clone-a79bf",
    storageBucket: "drive-clone-a79bf.appspot.com",
    messagingSenderId: "1060264786510",
    appId: "1:1060264786510:web:c3797c7da2e4a714c3e11f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }