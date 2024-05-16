const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=geolier/";
let id = new URLSearchParams(window.location.search).get("id");

async function artistPage() {
    const response = await fetch(url);
    const artists = await response.json();

    let divArtist = document.getElementById('hero-artist-container');

    if(response.ok) {

        artists.data.forEach((artist) => {
            divArtist.data.innerHTML += `
            <div id="hero-artist-container" style="background-image: url('${artist.cover}')>
                    <div id="background-img-artist"></div>
                    <div class="d-flex">
                        <i class="bi bi-check-circle-fill"></i>
                        <p>Artista verificato</p>
                    </div>
                    <h2>Yellowcard</h2>
                    <p>1234564640646 ascoltatori</p>
            </div>
            `
        });
    }


}