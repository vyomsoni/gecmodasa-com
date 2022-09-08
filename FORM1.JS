
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDUAYzweLxkNbvarfMk3hnVZbkCw6dvY-g",
    authDomain: "from-4cc5f.firebaseapp.com",
    databaseURL: "https://from-4cc5f-default-rtdb.firebaseio.com",
    projectId: "from-4cc5f",
    storageBucket: "from-4cc5f.appspot.com",
    messagingSenderId: "1020107994372",
    appId: "1:1020107994372:web:923ebf7588037d2de00c51",
    measurementId: "G-LH3CRFD7NE"
  };
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var NAME = document.getElementById("NAME");
    var PASSWORD = document.getElementById("PASSWORD");

    const promise = auth.createUserWithEmailAndPassword(NAME.value,PASSWORD.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var NAME = document.getElementById("NAME");
    var PASSWORD  = document.getElementById("PASSWORD");
    const promise = auth.signInWithEmailAndPassword(NAME.value,PASSWORD.value)
   .then((userCredential) => {
    const user = userCredential.user;
    window.location.assign("index.html");
    alert("Login is Successfull");
   })
   .catch((error) =>{
    const errorCode=error.code;
    const errorMessage=error.message;
    alert("Password or userId is wrong");

   })
    
  }
  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      
      var NAME = user.NAME;
      alert("Active user "+NAME);
   
    }else{
      alert("No Active user Found")
    }
  })