var firebaseConfig = {
      apiKey: "AIzaSyBIfwZtx5ATHdr24l36Zw8quTz_dZ2SYUM",
      authDomain: "kwitter-5c440.firebaseapp.com",
      databaseURL: "https://kwitter-5c440-default-rtdb.firebaseio.com",
      projectId: "kwitter-5c440",
      storageBucket: "kwitter-5c440.appspot.com",
      messagingSenderId: "534828568324",
      appId: "1:534828568324:web:cc03f6f5f0eb8194d34a51"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name = " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirect(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;


            });
      });
}
getData();

function redirect(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}