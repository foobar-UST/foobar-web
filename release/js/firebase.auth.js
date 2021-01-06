// Must have firebase-auth.js included before this can be used.

function loggedIn() {
    var state = false;
    var user = firebase.auth().currentUser;
    if (user) {
        state = true;
    }
    return state;
}

function getUserInfo() {
    var user = null;
    firebase.auth().onAuthStateChanged(function(_user) {
        user = _user;
    });
    return user;
}