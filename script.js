
document.addEventListener("DOMContentLoaded", () => {
    const changingText = document.querySelector('.changing-text');
    const phrases = ['Jeganthan', 'An Engineering Student', 'A Software Developer'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentIndex];
        const displayedText = isDeleting 
            ? currentPhrase.substring(0, charIndex--)
            : currentPhrase.substring(0, charIndex++);

        changingText.textContent = displayedText;

        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => isDeleting = true, 3000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % phrases.length;
        }

        const timeout = isDeleting ? 100 : 100;
        setTimeout(type, timeout);
    }

    type();

    
});



