var firebaseConfig = { apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw", authDomain: "jsdbtest.firebaseapp.com", databaseURL: "https://jsdbtest.firebaseio.com", projectId: "jsdbtest", storageBucket: "jsdbtest.appspot.com", messagingSenderId: "557097620929", appId: "1:557097620929:web:d549209de61a48b20b8b40" }; // Initialize Firebase firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
     window.location = "kwitter_room.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}