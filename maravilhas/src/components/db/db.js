import firebase from 'firebase'

    let firebaseConfig = {
            apiKey: "AIzaSyCIMoeHGheBKlVMWvCVkgS7GQrfyjgNmAc",
            authDomain: "site-maravilhas-do-seculo.firebaseapp.com",
            projectId: "site-maravilhas-do-seculo",
            storageBucket: "site-maravilhas-do-seculo.appspot.com",
            messagingSenderId: "931903504944",
            appId: "1:931903504944:web:b9c693db0489a915cde3f5"
        }
        if(!firebase.apps.length){
          firebase.initializeApp(firebaseConfig)
        }
        
export default firebase