function changeSong() {
    let currentSong = document.getElementById("play-audio")
    let currentSongName = document.getElementById("song-name")

    if (currentSong.getAttribute("src") === "audio/ZrC - Trap Test (130 bpm).mp3") {
        currentSong.setAttribute("src", "audio/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3")
        currentSongName.innerHTML = "XLR8 [Snippet - 808 note change] (165bpm)"
    } else if (currentSong.getAttribute("src") === "audio/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3") {
        currentSong.setAttribute("src", "audio/ZrC - Trap Test (130 bpm).mp3")
        currentSongName.innerHTML = "ZrC - Trap Test (130 bpm)"
    }
}

document.addEventListener('DOMContentLoaded', (event) => {

    const stations = {
        "hip-hop": {
            "name": "Hip Hop",
            "songs": {
                1: {
                    url: "audio/Hip Hop/ZrC - Trap Test (130 bpm).mp3",
                    "song_name": "ZrC - Trap Test (130 bpm)"
                },
                2: {
                    url: "audio/Hip Hop/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3",
                    song_name: "XLR8 [Snippet - 808 note change] (165bpm)"
                }
            }
        }
    }

    // get the number of songs in a specific station
    let hip_hop_length = Object.values(stations["hip-hop"]["songs"]).length
    let playlist_songs = document.getElementById("station-songs")

    for (let numOfSongsInDirectory = 1; numOfSongsInDirectory <= hip_hop_length; numOfSongsInDirectory++) {
        let song = document.createElement("p")
        song.innerHTML = stations["hip-hop"]["songs"][numOfSongsInDirectory]["song_name"]
        playlist_songs.append(song)
    }

});