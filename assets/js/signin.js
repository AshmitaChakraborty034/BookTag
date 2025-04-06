'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const googleBtn = document.querySelector('.google-btn');
    const githubBtn = document.querySelector('.github-btn');
    const twitterBtn = document.querySelector('.twitter-btn');

    googleBtn.addEventListener('click', () => {
        // Google sign in logic
        console.log('Google sign in clicked');
    });

    githubBtn.addEventListener('click', () => {
        // GitHub sign in logic
        console.log('GitHub sign in clicked');
    });

    twitterBtn.addEventListener('click', () => {
        // Twitter sign in logic
        console.log('Twitter sign in clicked');
    });
});
