import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import firebase_keys from '../keys/firebase_keys';

firebase.initializeApp(firebase_keys)

export default firebase;