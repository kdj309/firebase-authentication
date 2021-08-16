import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const app=firebase.initializeApp({
    apiKey:"AIzaSyCSxx2XVrrROTN3HJWiDuDxFoMsfK8Yy0U",
    authDomain:"fir-auth-558a9.firebaseapp.com",
    projectId:"fir-auth-558a9",
    storageBucket:"fir-auth-558a9.appspot.com" ,
    messagingSenderId:"860456921944",
    appId: "1:860456921944:web:39c5dafaedd3934239d32d"
})
const auth=app.auth()
export default app
export {auth}