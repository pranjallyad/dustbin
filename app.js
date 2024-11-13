// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7esx4WoLBkgjB80OcR3xIGLghV85w2mw",
      authDomain: "smart-dustbin-7a8e9.firebaseapp.com",
      databaseURL: "https://smart-dustbin-7a8e9-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "smart-dustbin-7a8e9",
      storageBucket: "smart-dustbin-7a8e9.firebasestorage.app",
      messagingSenderId: "121229592646",
      appId: "1:121229592646:web:c107fb2365016332ce2247",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  // Fetch dustbin status from Firebase
  function fetchDustbinStatus() {
    const statusRef = firebase.database().ref("distanceStatus");
  
    // Add error handling
    statusRef.on(
      "value",
      (snapshot) => {
        const statusElement = document.getElementById("dustbin-status");
        const status = snapshot.val();
        if (status !== null) {

            statusElement.textContent = status;

      // Change text color based on the status
      if (status === "Dustbin is not Full") {
        statusElement.style.color = "green";
      } else {
        statusElement.style.color = "red";
      }
          console.log("Dustbin Status:", status); // Logs the value if available
          document.getElementById("dustbin-status").textContent = ` ${status}`;
        } else {
          console.log("Dustbin status is null or undefined.");
          document.getElementById("dustbin-status").textContent = "Status unavailable";
        }
      },
      (error) => {
        console.error("Error reading data:", error);
        document.getElementById("dustbin-status").textContent = "Error loading status";
      }
    );
  }
  
  
  // Call the function to fetch dustbin status
  fetchDustbinStatus();
  


  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC7esx4WoLBkgjB80OcR3xIGLghV85w2mw",
//   authDomain: "smart-dustbin-7a8e9.firebaseapp.com",
//   databaseURL: "https://smart-dustbin-7a8e9-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "smart-dustbin-7a8e9",
//   storageBucket: "smart-dustbin-7a8e9.firebasestorage.app",
//   messagingSenderId: "121229592646",
//   appId: "1:121229592646:web:c107fb2365016332ce2247",
//   measurementId: "G-TNDLWPNFWF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);