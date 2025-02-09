//  Corrected Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWzjkN0eJpPEGdPa9bE7LIrFoyrJHxpRs",
    authDomain: "contactform-eb56f.firebaseapp.com",
    databaseURL: "https://contactform-eb56f-default-rtdb.firebaseio.com",
    projectId: "contactform-eb56f",
    storageBucket: "contactform-eb56f.firebasestorage.app",
    messagingSenderId: "908555159269",
    appId: "1:908555159269:web:61169bc8a51202dfd5f60c"
  };

//  Initialize Firebase
firebase.initializeApp(firebaseConfig);

//  Reference your database
var contactformDB = firebase.database().ref("Contactform");

//  Add event listener to the form
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var service = getElementVal("service");
    var message = getElementVal("message");

    //  Save data to Firebase
    saveMessage(name, email, phone, service, message);

    //  Show confirmation message
    alert("Form submitted successfully!");

    // //  Reset form after submission
    // document.getElementById("contactform").reset();
}

//  Function to save messages to Firebase
const saveMessage = (name, email, phone, service, message) => {
    var newContactform = contactformDB.push();

    newContactform.set({
        name: name,
        email: email,
        phone: phone,
        service: service,
        message: message,
    });
};

// Function to get input values
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
