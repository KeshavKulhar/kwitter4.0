var firebaseConfig = {
    apiKey: "AIzaSyBIfwZtx5ATHdr24l36Zw8quTz_dZ2SYUM",
    authDomain: "kwitter-5c440.firebaseapp.com",
    databaseURL: "https://kwitter-5c440-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c440",
    storageBucket: "kwitter-5c440.appspot.com",
    messagingSenderId: "534828568324",
    appId: "1:534828568324:web:cc03f6f5f0eb8194d34a51"
  };
  
firebase.initializeApp(firebaseConfig);

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }