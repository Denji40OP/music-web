const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

const tracks = [
    {
        title: 'Song One',
        artist: 'Artist One',
        src: 'path/to/song1.mp3'
    },
    {
        title: 'Song Two',
        artist: 'Artist Two',
        src: 'path/to/song2.mp3'
    },
    // Add more tracks as needed
];

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
}

function playPauseTrack() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
}

playPauseBtn.addEventListener('click', playPauseTrack);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

// Load the first track initially
loadTrack(currentTrackIndex);
