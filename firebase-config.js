// ==========================================
// FIREBASE CONFIGURATION
// ==========================================
// IMPORTANT: Paste your Firebase Web App configuration below.
// You can get this from the Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
  apiKey: "AIzaSyDHQoVe6epop2k1GYSgMYAqiFiQTqNrwiU",
  authDomain: "fswd-reg-form.firebaseapp.com",
  projectId: "fswd-reg-form",
  storageBucket: "fswd-reg-form.firebasestorage.app",
  messagingSenderId: "856404445829",
  appId: "1:856404445829:web:de06fb7ec373953a7b77ec",
  measurementId: "G-T8XD3YZHG7"
};

// Initialize Firebase App
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Services
const db = firebase.firestore();
const auth = firebase.auth();
