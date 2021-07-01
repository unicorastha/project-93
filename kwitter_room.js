var firebaseConfig = {
      apiKey: "AIzaSyDFm6RBhzZurKnk7_r5HRno7bd1qQyO0zY",
      authDomain: "activity-kwitter.firebaseapp.com",
      databaseURL: "https://activity-kwitter-default-rtdb.firebaseio.com",
      projectId: "activity-kwitter",
      storageBucket: "activity-kwitter.appspot.com",
      messagingSenderId: "1082966801786",
      appId: "1:1082966801786:web:881d6d34b77aae1c53aac3"


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
