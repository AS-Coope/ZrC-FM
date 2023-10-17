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
        "hip-hop": "Crispy Hip Hop FM"
    }

    let playlist_songs = document.getElementById("station-songs")
    let song = document.createElement("p")
    song.innerHTML = "Test"
    playlist_songs.append(song)

});