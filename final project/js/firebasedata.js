firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});


function loginto() {
	
	var user_email = document.getElementById("email_field").value;
	var user_password = document.getElementById("password_field").value;

}