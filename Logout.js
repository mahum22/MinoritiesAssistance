// config contains the logins you need to use the Firebase API
var config = {
	apiKey: "AIzaSyDEsWRHBFCz0dhVRg5cekLTHKI5ertDSAE",
	authDomain: "gwc-project-7d5ab.firebaseapp.com",
	databaseURL: "https://gwc-project-7d5ab.firebaseio.com",
	projectId: "gwc-project-7d5ab",
	storageBucket: "gwc-project-7d5ab.appspot.com",
	messagingSenderId: "250632410891"
};

// Initialize Firebase
firebase.initializeApp(config);


// handleLogOut gets called when the button is pressed
 function handleLogOut() {
	 firebase.auth().signOut().catch(function(error) {
		 // An error happened
		document.getElementById('message-box').innerHTML = error.message;
	});
}

// waits for authentication status changes
function authStatusListener() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// A user is signed in
		} else {
			document.getElementById('nav-bar').innerHTML = '<ul><li><a href="search.html">Search</a></li><li><a href="index.html">Home </a></li><li><h3><a href="index.html">MAAS</a></h3></li><li><a href="login.html">Log In </a></li><li><a href="signup3.html">Sign Up </a></li></ul>';
			document.getElementById('message-box').innerHTML = '<h1><center>You\'re logged out.</h1><br><button onclick="home()" class="width">Click me to go to the Home Screen!</button></center>';
			document.getElementById('invisible').style.visibility='hidden';
		}
	});
}

function home() {
	location.href = "index.html";
}
// the function that gets called when the page first loads
function init() {
	authStatusListener();
}

// tells the browser to call init when the page first loads
window.onload = init();
