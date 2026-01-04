const form = document.getElementById("songForm");
const songsDiv = document.getElementById("songs");

let songs = JSON.parse(localStorage.getItem("songs")) || [];

function renderSongs() {
    songsDiv.innerHTML = "";
    songs.forEach(song => {
        songsDiv.innerHTML += `
            <div class="song">
                <h3>${song.title} - ${song.artist}</h3>
                <pre>${song.lyrics}</pre>
            </div>
        `;
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const lyrics = document.getElementById("lyrics").value;

    songs.push({ title, artist, lyrics });
    localStorage.setItem("songs", JSON.stringify(songs));

    form.reset();
    renderSongs();
});

renderSongs();
