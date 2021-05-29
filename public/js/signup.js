(function() {


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


  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const signupButton = document.getElementById('signupButton');

  signupButton.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise
      .catch(e=>console.log(e.message));
    
    console.log("here");
    // var database = firebase.database();
    // console.log(email);
    // firebase.database().ref("user/" + email).set({
    // username: email,
    // password: pass
    // });
  });
}());

