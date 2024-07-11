// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the audio element for background music and the control button
    const music = document.getElementById('backgroundMusic');
    const controlButton = document.getElementById('musicControl');

    // Play music after any user interaction (e.g., click)
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play();
        }
    });

    // Add event listener to the music control button
    controlButton.addEventListener('click', toggleMusic);
});

// Function to toggle music play/pause
function toggleMusic() {
    // Get the audio element for background music and the control button
    const music = document.getElementById('backgroundMusic');
    const controlButton = document.getElementById('musicControl');

    // Check if music is paused
    if (music.paused) {
        // If paused, play music and update button text
        music.play();
        controlButton.textContent = 'Pause Music';
    } else {
        // If playing, pause music and update button text
        music.pause();
        controlButton.textContent = 'Play Music';
    }
}
