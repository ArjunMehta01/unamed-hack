<html>
  <head>
    <meta charset="utf-8"/>
    
    <title>Firebase example</title>
  </head>
  <body>
    <h1>Firebase example</h1>
    <pre id='data'></pre>
  <!-- <script src="./js/app.js"></script> -->
    <script src="https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js"></script>
    <script src="https://www.gstatic.come/firebasejs/7.14.1/firebase-database.js"></script>

    <script>
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

    var ref = firebase.database().ref();
    ref.on("value", function(snapshot){
      output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
    });

    </script>



  </body>
</html>