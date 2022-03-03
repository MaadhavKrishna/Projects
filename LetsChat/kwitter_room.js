document.getElementById("user_name").innerHTML=localStorage.getItem("user_name");
var firebaseConfig = {
      apiKey: "AIzaSyDh_2KD0OHWOPhHQ3OiWVjJR7gyZECWz-8",
      authDomain: "chatsapp-a633c.firebaseapp.com",
      databaseURL: "https://chatsapp-a633c.firebaseio.com",
      projectId: "chatsapp-a633c",
      storageBucket: "chatsapp-a633c.appspot.com",
      messagingSenderId: "990000824740",
      appId: "1:990000824740:web:b4c0b90aa7fb3c16e0c131",
      measurementId: "G-YYEQDGWW70"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+Room_names+"<br>";
      });});}
getData();

function logout(){
      window.location="index.html";
}

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            Message:"Welcome to "+room_name+" room"
      });
}