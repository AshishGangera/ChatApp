// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVWcig5JV-aEwvHOb7qaLH2HBLxdMQCLs",
    authDomain: "chat-room-aa65d.firebaseapp.com",
    databaseURL: "https://chat-room-aa65d-default-rtdb.firebaseio.com",
    projectId: "chat-room-aa65d",
    storageBucket: "chat-room-aa65d.appspot.com",
    messagingSenderId: "243732844778",
    appId: "1:243732844778:web:7616a8af0de60aaeb9c793",
    measurementId: "G-KWSWH3J6MB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database services
const db = getDatabase(app);

// let myArray = [];
let a;
// let obj = {};

let array = [];
let jsArray = [];
let input_ref = ref(db, 'user_inputs/');
let input;
let dbref = ref(db, 'user/');
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    input = document.getElementById("myInput").value;
    console.log(input);

    let obj = {
        Text: input
    }
    console.log(obj);

    array.push(obj);
    console.log(array);

    set(ref(db, 'user_inputs/'), array);
    content.innerHTML = "";

    for (a = 0; a < array.length; a++) {
        let p = document.createElement('p');
        p.innerHTML = array[a].Text;
        content.appendChild(p);
    }

    myInput.value = "";
})

onValue(input_ref, function (snapshot) {
    jsArray = snapshot.val();
    if (jsArray == null) {
        array = [];
    }
    else {
        array = jsArray;
    }
    // console.log(array);
    content.innerHTML = " ";

    for (a = 0; a < array.length; a++) {
        let p = document.createElement('p');
        p.innerHTML = array[a].Text;
        content.appendChild(p);
    }
});





