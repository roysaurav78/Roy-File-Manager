import firebase from 'firebase'

/*const firebaseConfig = {
    apiKey: "AIzaSyANE39sgac-2bJHy3UQ5UcCLonpJ4OfQ8A",
    authDomain: "drive-clone-e32b9.firebaseapp.com",
    projectId: "drive-clone-e32b9",
    storageBucket: "drive-clone-e32b9.appspot.com",
    messagingSenderId: "1065309532898",
    appId: "1:1065309532898:web:58ae8cce733671b27fe4bb"
};
*/
const firebaseConfig = {
    apiKey: "AIzaSyAItm6hH1es1sSNuy1QL0EermN5SLQgmp0",
    authDomain: "my-drive-live.firebaseapp.com",
    projectId: "my-drive-live",
    storageBucket: "my-drive-live.appspot.com",
    messagingSenderId: "599105877904",
    appId: "1:599105877904:web:34ff7e81346a9b45f22515"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }