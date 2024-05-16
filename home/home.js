const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=geolier/"; // url singolo artista
const urlAlbum =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=album/"; //url album

async function loadSongs() {
    const response = await fetch(url);
    const songs = await response.json();
    console.log(songs);

    const divArtist = document.getElementById("card-hero-home");
    if (divArtist && songs.data.length > 0) {
        const firstSong = songs.data[0]; // Ottieni solo la prima canzone
        divArtist.innerHTML = `
            <div class="d-flex">
                <div>
                    <img id="cover-image" src="${firstSong.album.cover_xl}" alt="Foto">
                </div>
                <div class="d-flex flex-column mx-3">
                    <span>ALBUM</span>
                    <h2 class="song-title">${firstSong.title}</h2>
                    <span class="fs-6">${firstSong.artist.name}</span>
                    <span class="my-3">Ascolta il tuo nuovo singolo di ${firstSong.artist.name}</span>
                    <div class="mt-2"> 
                        <button class="button-play-home" type="button"> Play </button>
                        <button class="button-salva-home" type="button"> Salva </button>
                        <i class="bi bi-three-dots"></i>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Gestione se non ci sono canzoni disponibili
        divArtist.innerHTML = "Nessuna canzone trovata";
    }
}

loadSongs();


async function loadAlbum() {
    const response = await fetch(urlAlbum);
    const albums = await response.json();
    console.log(albums);

    let containerCard = document.getElementById("container-card-album"); 

    if(response.ok) {
        albums.data.forEach((album) => {
            containerCard.innerHTML += `
                <div class="col-2 p-1 mx-1">
                    <div class="albums-card d-flex align-items-center flex-column">
                        <img class="album-img mt-2" src="${album.album.cover}
                        " alt="">
                        <h6 class="pt-2">${album.title}</h6>
                        <p class="artist-name">${album.artist.name}</p>
                    </div>
                </div>
        `;
});
    } else {
        containerCard.innerHTML = "Nessuna canzone trovata";
    }

    

    // const albumRandom = Math.floor(Math.random() * albums.data.length);
}
loadAlbum();










// function showDetail(id) {
//   window.location.href = `/Details/details.html?id=${id}`;
// }