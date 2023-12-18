let changeSongBtn = document.getElementById("change-song");
let hipHopStation = document.getElementById("hip-hop");
let dnbStation = document.getElementById("dnb");
let stationSongList;
let currentStation;

const stations = {
    "hip-hop": {
        "name": "Hip Hop",
        "songs": {
            1: {
                "url": "audio/Hip Hop/ZrC - Trap Test (130 bpm).mp3",
                "songName": "ZrC - Trap Test (130 bpm)"
            },
            2: {
                "url": "audio/Hip Hop/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3",
                "songName": "XLR8 [Snippet - 808 note change] (165bpm)"
            }
        }
    },
    "dnb": {
        "name": "Drum and Bass",
        "songs": {
            1: {
                "url": "Intelligent DnB.mp3",
                "songName": "Intelligent DnB"
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
    // store all station songs if present
    stationSongList = document.querySelectorAll(".station-song");

    // get the number of songs in a specific station
    const stationLength = Object.values(stations[stationElementId]["songs"]).length;
    let playlistSongs = document.getElementById("station-songs");

    // if a station is selected, and another station's songs are already being 
    // displayed in the Station Songs container, then, those songs, currently
    // in the Station Songs container are first removed to make way for only
    // the songs in the station selected
    if (stationSongList.length > 0 && currentStation !== stationElementId) {
        removeCurrentSongs(stationSongList);
    }

    // add the currently selected station's songs to the Station Songs container
    if (currentStation !== stationElementId) {
        addCurrentSongs(stationLength, stationElementId, playlistSongs);
    }
    currentStation = stationElementId;
}

function removeCurrentSongs(songList) {
    songList.forEach((elem) => {
        (elem.parentNode.removeChild(elem));
    });
}

function addCurrentSongs(stationLength, stationElemId, playlistSongs) {
    for (let numOfSongsInDirectory = 1; numOfSongsInDirectory <= stationLength; numOfSongsInDirectory++) {
        let song = document.createElement("p");
        song.className = "station-song";
        song.textContent = stations[stationElemId]["songs"][numOfSongsInDirectory]["songName"];
        playlistSongs.append(song);
    }
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

dnbStation.addEventListener('click', () => {
    populateStationSongsContainer(dnbStation);
});
/* document.addEventListener('DOMContentLoaded', (event) => {
    main();
}); */