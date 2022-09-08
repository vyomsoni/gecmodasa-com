
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAxlB0O-rfqCqA1Mp06pfMIeNyCVJmj7dI",
    authDomain: "loginpage-49a27.firebaseapp.com",
    databaseURL: "https://loginpage-49a27-default-rtdb.firebaseio.com",
    projectId: "loginpage-49a27",
    storageBucket: "loginpage-49a27.appspot.com",
    messagingSenderId: "134163927286",
    appId: "1:134163927286:web:f73c46742798ff29069cd7",
    measurementId: "G-DXD3Q6QSEJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })