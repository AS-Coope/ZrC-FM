let changeSongBtn = document.getElementById("change-song");
let hipHopStation = document.getElementById("hip-hop");
let currentStation;

const stations = {
    "hip-hop": {
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

// only to test to ensure the song changes
// realistically, this (event listener) will be applied to every song in the
// station songs ("All Songs") area, so that the current song can be changed
// to that song, unless that song is currently being played
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

/* 
    This works for each station. So, when a station is clicked from the side bar, 
    the following happens, regarding that specific station
*/
function populateStationSongsContainer(stationElement) {

    const stationElementId = stationElement.getAttribute("id");
    // get the number of songs in a specific station
    const stationLength = Object.values(stations[stationElementId]["songs"]).length;
    let playlistSongs = document.getElementById("station-songs");

    // INTRODUCE FUNCTIONALITY TO REMOVE SONGS FROM CONTAINER ONCE THE STATION IS SWITCHED
    if (currentStation !== stationElementId) {
        for (let numOfSongsInDirectory = 1; numOfSongsInDirectory <= stationLength; numOfSongsInDirectory++) {
            let song = document.createElement("p");
            song.textContent = stations[stationElementId]["songs"][numOfSongsInDirectory]["songName"];
            playlistSongs.append(song);
        }
    }
    currentStation = stationElementId;
}

/* Eventually, when more stations are created, a nodelist of all the stations will
be captured from the DOM for all the elements with the class station.
A foreach will be ran on the nodelist to apply the event listener to each
node and when that specific station is clicked, then it will call main and pass
itself as the argument (instead of how hipHopStation alone is passed here)
*/
hipHopStation.addEventListener('click', () => {
    populateStationSongsContainer(hipHopStation);
});
/* document.addEventListener('DOMContentLoaded', (event) => {
    main();
}); */