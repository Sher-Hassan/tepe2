// loading.js

// Function to redirect to the main page
function redirectToMain() {
    window.location.href = 'mc.html';
}

// Wait for 3 seconds before redirecting
window.addEventListener('load', () => {
    setTimeout(redirectToMain, 3000);
});