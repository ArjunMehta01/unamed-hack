

var config = {
    apiKey: "AIzaSyD08Vf5zlyun3msueD-npjX7DD41098KNE",
    authDomain: "hackon-98735.firebaseapp.com",
    databaseURL: "https://hackon-98735-default-rtdb.firebaseio.com",
    projectId: "hackon-98735",
    storageBucket: "hackon-98735.appspot.com",
    messagingSenderId: "221881769478",
    appId: "1:221881769478:web:f420ccbd0de6296f596d87",
    measurementId: "G-SRKWNYYP10"
  }; 
    firebase.initializeApp(config);
    var database = firebase.database();
    firebase.database().ref('testido').set({
    username: "wack",
    email: "email",
});