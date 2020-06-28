 var firebaseConfig = {
    apiKey: "AIzaSyAp12YULyMF5efNQ_izfu8CmEs9aL95SVw",
    authDomain: "panache-designs--coming-soon.firebaseapp.com",
    databaseURL: "https://panache-designs--coming-soon.firebaseio.com",
    projectId: "panache-designs--coming-soon",
    storageBucket: "panache-designs--coming-soon.appspot.com",
    messagingSenderId: "903392215431",
    appId: "1:903392215431:web:8c00ccf8bb4dfa23f25322",
    measurementId: "G-GHGSKWCRWN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var messagesRef = firebase.database().ref('message');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
 
  // Get values

 
  var email = getInputVal('email');

  //var message = getInputVal('message');

  // Save message
  saveMessage(email);

 // Show alert
 //document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  //setTimeout(function(){
  // document.querySelector('.alert').style.display = 'none';
  //},3000);

  // Clear form
  document.getElementById('contactForm').reset();
}


// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
   // name: name,

    email:email
   
   
  });
}

