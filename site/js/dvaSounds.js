function playSound(i) { // accepts the index no as the argument and plays the corresponding audio clip
    const audioClip = document.querySelector(`audio[data-i="${i}"`);
    audioClip.currentTime = 0;
    audioClip.play();
}

// Code block below removes the focus ring, but allows it to still be used for those unable to use a mouse.
// Code taken from an awesome Medium article on Accessibility & the focus ring. 
// https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

function handleFirstTab(e) {
    if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing');

        window.removeEventListener('keydown', handleFirstTab);
        window.addEventListener('mousedown', handleMouseDownOnce);
    }
}

function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');

    window.removeEventListener('mousedown', handleMouseDownOnce);
    window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);
