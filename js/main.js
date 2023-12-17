let changeSongBtn = document.getElementById("change-song");
const stations = {
    "hipHop": {
        "name": "Hip Hop",
        "songs": {
            1: {
                url: "audio/Hip Hop/ZrC - Trap Test (130 bpm).mp3",
                "songName": "ZrC - Trap Test (130 bpm)"
            },
            2: {
                url: "audio/Hip Hop/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3",
                "songName": "XLR8 [Snippet - 808 note change] (165bpm)"
            }
        }
    }
};

changeSongBtn.addEventListener('click', () => {
    changeSong();
});

function changeSong() {
    let currentSong = document.getElementById("play-audio");
    let currentSongName = document.getElementById("song-name");

    if (currentSong.getAttribute("src") === "audio/ZrC - Trap Test (130 bpm).mp3") {
        currentSong.setAttribute("src", "audio/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3");
        currentSongName.textContent = "XLR8 [Snippet - 808 note change] (165bpm)";
    } else if (currentSong.getAttribute("src") === "audio/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3") {
        currentSong.setAttribute("src", "audio/ZrC - Trap Test (130 bpm).mp3");
        currentSongName.textContent = "ZrC - Trap Test (130 bpm)";
    }
}

function main() {

    // get the number of songs in a specific station
    const hipHopLength = Object.values(stations["hipHop"]["songs"]).length;
    let playlistSongs = document.getElementById("station-songs");

    for (let numOfSongsInDirectory = 1; numOfSongsInDirectory <= hipHopLength; numOfSongsInDirectory++) {
        let song = document.createElement("p");
        song.textContent = stations["hipHop"]["songs"][numOfSongsInDirectory]["songName"];
        playlistSongs.append(song);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    main();
});