const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=geolier/";
let id = new URLSearchParams(window.location.search).get("id");

async function artistPage() {
    const response = await fetch(url);
    const artists = await response.json();

    let divArtist = document.getElementById('hero-artist-container');

    if(response.ok) {

        artists.data.forEach((artist) => {
            divArtist.innerHTML += `
            <div class="d-flex justify-content-between my-2 ">
                        <div>
                            <i class="bi bi-chevron-left bg-black rounded-5 p-2"></i>
                            <i class="bi bi-chevron-right bg-black rounded-5 p-2"></i>
                        </div>
                        <div class="top-hero-lidia rounded-4">
                            <img class="rounded-5" src="https://picsum.photos/30/30" alt="">
                            <span>Lidia Nautilus ... </span>
                            <i class="bi bi-caret-down-fill"></i>
                        </div>
                    </div>
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

artistPage()