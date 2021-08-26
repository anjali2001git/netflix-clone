import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB7NinWQILosmnJkgDbhCg4hMh9oBW6mc4",
    authDomain: "netflix-clone-5569b.firebaseapp.com",
    projectId: "netflix-clone-5569b",
    storageBucket: "netflix-clone-5569b.appspot.com",
    messagingSenderId: "536981703215",
    appId: "1:536981703215:web:ab326c5972be4c887894da",
    measurementId: "G-ZQW5V70EW4"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;