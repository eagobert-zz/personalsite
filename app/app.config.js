// Initialize Firebase
app.constant("FIREBASE_CONFIG", {
  apiKey: "AIzaSyD3bBKl0SMZW6boRYC5s0L_ko0wzV3Ihw0",
  authDomain: "personal-site-82611.firebaseapp.com",
  databaseURL: "https://personal-site-82611.firebaseio.com",
  projectId: "personal-site-82611",
  storageBucket: "personal-site-82611.appspot.com",
  messagingSenderId: "311722329462"
})

angular.module("myApp").run(function(FIREBASE_CONFIG){firebase.initializeApp(FIREBASE_CONFIG)

})
  
