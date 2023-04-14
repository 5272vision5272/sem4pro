firebase.auth().onAuthStateChanged(function(user) {

if(user) {
	document.getElementById("user_div").style.display="block";
		document.getElementById("login_div").style.display="none";

  // User is signed in.
} else {
		document.getElementById("user_div").style.display="none";
		document.getElementById("login_div").style.display="block";
  // No user is signed in.
}
});

function login(){
	

	var userEmail=document.getElementById("email_field").value;
	var userPass=document.getElementById("password_field").value;

firebase.auth().signInWithEmailAndPassword(userEmail,userPass).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  window.alert("Error :" + errorMessage);
});
}
function logout(){
	firebase.auth().signOut();
}