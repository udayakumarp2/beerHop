$(document).ready(function(){
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyChzDkZGoqLvISUtFmH3Cj1caDobXUMDLs",
    authDomain: "beerhop-e5052.firebaseapp.com",
    databaseURL: "https://beerhop-e5052.firebaseio.com",
    projectId: "beerhop-e5052",
    storageBucket: "",
    messagingSenderId: "930662826832"
  };
  firebase.initializeApp(config);
    
    
var database= firebase.database();

$('#addMessage').on('click',function(event){
    event.preventDefault();
  
  var nameInput =$("#nameInput").val().trim();
  var messageInput  =$("#messageInput").val().trim();

  var addMessage = {
    name: nameInput,
    comment: messageInput
  };

  database.ref().push(addMessage);


  $("#nameInput").val("");
$("#messageInput").val("");
});

database.ref().on("child_added",function(childSnapshot,prevChildKey){
    console.log(childSnapshot.val());

    var inputName = childSnapshot.val().name;
    var inputMessage = childSnapshot.val().comment;

    $("#beerTable > tbody").append("<tr><td>" + inputName + "</td><td>" + inputMessage +"</td></tr>");
    });
    
    });