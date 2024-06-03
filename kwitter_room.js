
const firebaseConfig = {
  apiKey: "AIzaSyCq_D63xllyCD4xsqiLYRV_84a6cj83k5E",
  authDomain: "chatapp-12bc9.firebaseapp.com",
  databaseURL: "https://chatapp-12bc9.firebaseio.com",
  projectId: "chatapp-12bc9",
  storageBucket: "chatapp-12bc9.appspot.com",
  messagingSenderId: "1016967648867",
  appId: "1:1016967648867:web:f52b2e9f4a32912b728a56",
  measurementId: "G-BMS6EN71Z7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("room name -"+Room_names);
         row="<div class='room_name' id=" + Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
         document.getElementById("output").innerHTML+=row;
        });});}
  getData();

  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"Adding room name"
  
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html"
  }

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
  }
  
  