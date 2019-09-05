// Packages
import * as firebase from 'firebase/app'

// Firebase Modules
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

/**
 * @file Firebase configuration
 * @module api/firebase
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 * @see {@link https://firebase.google.com/docs/web/setup}
 */

/**
 * @property {object} config - Firebase web config
 * @property {string} config.apiKey - API key
 * @property {string} config.authDomain - Auth domain
 * @property {string} config.databaseURL - Default database url
 * @property {string} config.projectId - Project id
 * @property {string} config.storageBucket - Storage bucket url
 * @property {string} config.messagingSenderId - Messaging id
 * @property {string} config.appId - App id
 */
const config = {
  apiKey: 'AIzaSyDxXnRvf7kQsFug-3K2Fdd4vi2HQK-DxQw',
  authDomain: 'ltcollinstimeline.firebaseapp.com',
  databaseURL: 'https://ltcollinstimeline.firebaseio.com',
  projectId: 'ltcollinstimeline',
  storageBucket: 'ltcollinstimeline.appspot.com',
  messagingSenderId: '587780975201',
  appId: '1:587780975201:web:31e6dc6fb95efc18'
}

/**
 * @property {firebase.database.Database} - Firebase Database interface
 */
const database = firebase.database()

export { config, database }
