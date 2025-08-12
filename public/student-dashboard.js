document.addEventListener('DOMContentLoaded', () => {
  // Firebase config and auth initialization
  const firebaseConfig = {
    apiKey: "AIzaSyCYyyJcBgHf7Qq0YQLCfWXPHC0UqeoNc2U",
    authDomain: "royals-f5351.firebaseapp.com",
    projectId: "royals-f5351",
    storageBucket: "royals-f5351.firebasestorage.app",
    messagingSenderId: "564934364429",
    appId: "1:564934364429:web:4a84ab9a6dfc3eb34cf444",
    measurementId: "G-5X0NFVXY7D"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Require login: redirect if not logged in
  auth.onAuthStateChanged(user => {
    if (!user) {
      window.location.href = "index.html"; // redirect to homepage if not logged in
    }
  });

  // Tests form behavior
  const testSelect = document.getElementById('testSelect');
  const testQuestions = document.getElementById('testQuestions');
  const testForm = document.getElementById('testForm');

  testSelect.addEventListener('change', () => {
    if (testSelect.value) {
      testQuestions.style.display = 'block';
    } else {
      testQuestions.style.display = 'none';
    }
  });

  testForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Test submitted! (Functionality to be connected to backend)');
    testForm.reset();
    testQuestions.style.display = 'none';
  });

  // Dropdown toggle as per your code
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle('show');
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', () => {
    dropdownContent.classList.remove('show');
  });
});
