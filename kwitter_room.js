var firebaseConfig = {
    apiKey: "AIzaSyB-HTB5MesthoCNe5ul_axj0HShIxbV6tM",
    authDomain: "c93-homework-52321.firebaseapp.com",
    projectId: "c93-homework-52321",
    storageBucket: "c93-homework-52321.appspot.com",
    messagingSenderId: "253766357712",
    appId: "1:253766357712:web:d102523c1c68b4248ec4d5"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding New Room"
      });

      localStorage.setItem("Room Name" , room_name);
      window.location = "kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names-" , Room_names);
       row = "<div class = "+room_name;" id = "+ Room_names + " onclick = ";redirectToRoomName(this.id); ">#"+ Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room Name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Room Name");
      window.location = "kwitter_page.html";
}