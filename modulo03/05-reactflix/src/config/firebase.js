'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCLfg9OohMgPgJSkHElXhr0MlC5naRyWls',
  authDomain: 'reactflix-285dd.firebaseapp.com',
  databaseURL: 'https://reactflix-285dd.firebaseio.com',
  projectId: 'reactflix-285dd',
  storageBucket: 'reactflix-285dd.appspot.com',
  messagingSenderId: '251673438223',
  appId: '1:251673438223:web:d95df5c6d74959815e9b7a',
  measurementId: 'G-GSW6D7826S'
})

const db = firebase.database()

export { db }
