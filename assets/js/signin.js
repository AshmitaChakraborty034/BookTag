// Toggle password visibility using Bootstrap Icons
const togglePassword = document.getElementById('togglePassword');
const passwordInput = togglePassword.parentElement.querySelector('input');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    // Toggle icon between eye and eye-slash
    this.querySelector('i').classList.toggle('bi-eye');
    this.querySelector('i').classList.toggle('bi-eye-slash');
});

// Toggle between Sign In and Sign Up modes with a 1-second blur animation
const authCard = document.getElementById('authCard');
const toggleLink = document.getElementById('toggleLink');
const formHeader = document.getElementById('formHeader');
const formSubtitle = document.getElementById('formSubtitle');
const nameField = document.getElementById('nameField');
const authForm = document.getElementById('authForm');

toggleLink.addEventListener('click', function (e) {
    e.preventDefault();
    // Apply the blur effect class (transition lasts 1 second)
    authCard.classList.add('blur-effect');

    // Wait for 1 second before switching the mode and removing the blur
    setTimeout(() => {
        if (authCard.classList.contains('blur-effect')) {
            // Toggle the form content after the blur animation
            if (formHeader.textContent === 'Sign in') {
                formHeader.textContent = 'Sign up';
                formSubtitle.textContent = 'Create your account';
                toggleLink.innerHTML = 'Already have an account? <a href="#">Sign in</a>';
                nameField.style.display = 'block';
            } else {
                formHeader.textContent = 'Sign in';
                formSubtitle.textContent = 'Sign in with your Open account';
                toggleLink.innerHTML = 'Don\'t have an account? <a href="#">Sign up</a>';
                nameField.style.display = 'none';
            }
            // Remove the blur effect after updating the content
            authCard.classList.remove('blur-effect');
        }
    }, 1000); // 1000ms = 1 second
});

// Form submission (prevent default for demo)
authForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form submitted');
});

// User profile functionality
const userProfile = document.querySelector('.user-profile');
const profileIcon = document.querySelector('.profile-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');
const signOutButton = document.querySelector('.sign-out');

// Function to get initials from name
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

// Handle form submission and redirect
authForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    
    // Get user data
    const userData = {
        name: nameInput && nameInput.value ? nameInput.value : emailInput.value.split('@')[0],
        email: emailInput.value
    };
    
    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Redirect to index page
    window.location.href = '/index.html';
});

// Toggle dropdown menu
profileIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Handle sign out
signOutButton.addEventListener('click', () => {
    userProfile.style.display = 'none';
    dropdownMenu.classList.remove('active');
    document.querySelector('.form-container').style.display = 'block';
    document.querySelector('.signup-link').style.display = 'block';
    authForm.reset();
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!userProfile.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});