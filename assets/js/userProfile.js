document.addEventListener('DOMContentLoaded', function () {
    const authSection = document.getElementById('auth-section');
    const userProfile = document.querySelector('.user-profile');
    const profileIcon = userProfile.querySelector('.profile-icon');
    const profileIconSmall = userProfile.querySelector('.profile-icon-small');
    const userName = userProfile.querySelector('.user-name');
    const userEmail = userProfile.querySelector('.user-email');
    const dropdownMenu = userProfile.querySelector('.dropdown-menu');
    const signOutButton = userProfile.querySelector('.sign-out');

    // Check if user is logged in
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        const initials = userData.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase();

        // Update and show profile
        profileIcon.textContent = initials;
        profileIconSmall.textContent = initials;
        userName.textContent = userData.name;
        userEmail.textContent = userData.email;
        authSection.style.display = 'none';
        userProfile.style.display = 'flex';
    }

    // Toggle dropdown with click outside handling
    let isDropdownOpen = false;

    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('active');
        isDropdownOpen = !isDropdownOpen;
    });

    document.addEventListener('click', (e) => {
        if (isDropdownOpen && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
            isDropdownOpen = false;
        }
    });

    // Handle sign out
    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('userData');
        window.location.reload();
    });
});
