
const firebaseConfig = {
      apiKey: "AIzaSyCHiD8ivwuOONPf0NV0n-Jk_N19OO0fNd4",
      authDomain: "class-test-b8b98.firebaseapp.com",
      databaseURL: "https://class-test-b8b98-default-rtdb.firebaseio.com",
      projectId: "class-test-b8b98",
      storageBucket: "class-test-b8b98.appspot.com",
      messagingSenderId: "415857514601",
      appId: "1:415857514601:web:f69b6ffd41bc26ab5c6af8",
      measurementId: "G-ZKDQ7Q7RXH"
    };
  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";
function addRooms(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name -" + Room_names);
      row = "<div class ='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //start code
      console.log(firebase_message_id);
      console.log(message_data);
      name = message_data['name'];
      message=message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
      message_width_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
      like_button = "<button class = 'btn btn-warning' id="+ firebase_message_id + " value"+like + " onclick = 'updateLike(this.id)'>";
      span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like +" </span> </button> <hr>";
      row = name_with_tag + like_button + span_with_tag + message_width_tag; 
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_room.html";

}
function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}