
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDnSeOtgnp6Jh0EsdORTk3ireYEopGF45Y",
    authDomain: "letschat-d9fd6.firebaseapp.com",
    databaseURL: "https://letschat-d9fd6-default-rtdb.firebaseio.com",
    projectId: "letschat-d9fd6",
    storageBucket: "letschat-d9fd6.appspot.com",
    messagingSenderId: "79674190500",
    appId: "1:79674190500:web:27074cdec976c5d0175431"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Name-" + Room_names);
     row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem ("room_name", name);
    window.location = "kwitter_page.html";
}

displayName = localStorage.getItem("username") 
document.getElementById("welcomeText").innerHTML = "Welcome" + displayName

function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}