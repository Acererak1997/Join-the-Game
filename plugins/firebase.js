import firebase from 'firebase'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAwRrIamLc53pgOQqqQypCP1U4k8Lv2fRg',
    authDomain: 'join-the-game-74125.firebaseapp.com',
    databaseURL: 'https://join-the-game-74125.firebaseio.com',
    projectId: 'join-the-game-74125',
    storageBucket: 'join-the-game-74125.appspot.com',
    messagingSenderId: '516346423858',
    appId: '1:516346423858:web:6ab7a242a440e7310d6a2b',
    measurementId: 'G-7ZYJG16N1R',
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

export default firebase
