document.addEventListener('DOMContentLoaded', () => {
    // Rotate gears continuously
    gsap.to('.gear1', {
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: 'none'
    });

    gsap.to('.gear2', {
        rotation: -360,
        duration: 4,
        repeat: -1,
        ease: 'none'
    });

    // Animate progress bar
    gsap.to('.progress', {
        width: '100%',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
});
