function changeSong() {
    let currentSong = document.getElementById("play-audio")
    if (currentSong.getAttribute("src") === "audio/ZrC - Trap Test (130 bpm).mp3") {
        currentSong.setAttribute("src", "audio/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3")
    } else if (currentSong.getAttribute("src") === "audio/ZrC - XLR8 [Snippet - 808 note change] (165bpm).mp3") {
        currentSong.setAttribute("src", "audio/ZrC - Trap Test (130 bpm).mp3")
    }
}