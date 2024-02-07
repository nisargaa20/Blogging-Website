let firebaseConfig = {
    
        apiKey: "AIzaSyA3bWYPKPaLCB0EAqXtTqXbth5si8DtS-o",
        authDomain: "blog-website-cad09.firebaseapp.com",
        projectId: "blog-website-cad09",
        storageBucket: "blog-website-cad09.appspot.com",
        messagingSenderId: "531883230076",
        appId: "1:531883230076:web:716b75f1c8d7f9ee2b9af9"
      };

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
