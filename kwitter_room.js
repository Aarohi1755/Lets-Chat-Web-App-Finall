var firebaseConfig = {
      apiKey: "AIzaSyBpEtMK5DpxPoBBatjFEIzw6ojoM7i5MSE",
      authDomain: "kwitter-eac0a.firebaseapp.com",
      databaseURL: "https://kwitter-eac0a-default-rtdb.firebaseio.com",
      projectId: "kwitter-eac0a",
      storageBucket: "kwitter-eac0a.appspot.com",
      messagingSenderId: "234978287246",
      appId: "1:234978287246:web:bc771e8f4dca7ac4a133df"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
username=localStorage.getItem("user_input");
document.getElementById("welcome_user").innerHTML="𝓦𝓮𝓵𝓬𝓸𝓶𝓮 " + username + " !";


function AddRoom(){
      Roomname=document.getElementById("room_input").value;
      firebase.database().ref("/").child(Roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("Roomname",Roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function Logout(){
      window.location="index.html";
      localStorage.removeItem("Roomname");
      localStorage.removeItem("User");
}

function redirectToRoomName(room_chosen){
      window.location="kwitter_page.html";
      localStorage.setItem("Roomname", room_chosen);
      console.log("Room name chosen= "+ room_chosen);
}
