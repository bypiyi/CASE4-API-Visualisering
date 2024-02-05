// ----



// FÖR VIDEON PÅ STARTSIDAN
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');

    // Sätta uppspelningshastigheten till 0.5 (halva normala hastigheten)
    video.playbackRate = 0.5;
});



// FÖR SÖKNING
document.getElementById('searchIcon').addEventListener('click', function() {
    var searchInput = document.querySelector('#searchBox input');
    searchInput.removeAttribute('readonly');
    searchInput.focus(); // Lägg fokus på sökrutan efter att ha klickat på sökikonen
  });
  