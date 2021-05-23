(function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
    // Add firebaseConfig here.

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // Getting the information from the form elements

    const form_email = document.getElementById("form_email");
    const form_pwd = document.getElementById("form_password");
    const btn_login = document.getElementById("btn_login");



    // Listen for login button events if it is triggered
    btn_login.addEventListener('click', e => {
        const email = form_email.value;
        const pwd = form_pwd.value;
        console.log(email);
        console.log(pwd);
        const firebase_auth = firebase.auth();

        // Initiate sign in procedures
        const promise = firebase_auth.signInWithEmailAndPassword(email, pwd);
        promise.catch(e => console.log(e.message));
    })

    firebase.auth().onAuthStateChanged(foobarUser => {
        if (foobarUser) {
            console.log(foobarUser);
        }
        else {
            console.log("not logged in.");
        }
    })
}());