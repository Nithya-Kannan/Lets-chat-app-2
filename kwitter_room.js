
const firebaseConfig = {
  apiKey: "AIzaSyB4FyvRL7nY_uxOwIoXJrUIIJhM4Yzo-1U",
  authDomain: "chatroom-fdb2a.firebaseapp.com",
  databaseURL:"https://chatroom-fdb2a-default-rtdb.firebaseio.com",
  projectId: "chatroom-fdb2a",
  storageBucket: "chatroom-fdb2a.appspot.com",
  messagingSenderId: "726514203250",
  appId: "1:726514203250:web:0ad2d1872edc6e184020eb"
};

const app = initializeApp(firebaseConfig);

  initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        
        });});}
  getData();
  