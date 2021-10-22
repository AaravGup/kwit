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
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function send() {
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function updateLike(message_id){
console.log("click on the like button" + message_id);
button_id = message_id;
like = document.getElementById(button_id).value;
update_like = Number(likes) + 1;
firebase.database().ref(room_name).child(message_id).update({
like: updateLike
});

}