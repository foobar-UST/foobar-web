(function () {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyAUe-NmpBDD3_Zs5di1brYXEmDO8J2yXbc",
        authDomain: "foobar-group-delivery-app.firebaseapp.com",
        databaseURL: "https://foobar-group-delivery-app.firebaseio.com",
        projectId: "foobar-group-delivery-app",
        storageBucket: "foobar-group-delivery-app.appspot.com",
        messagingSenderId: "736111277135",
        appId: "1:736111277135:web:88b9762a6a07d3d4bbe63a",
        measurementId: "G-2TK10L2CB4"
    };
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