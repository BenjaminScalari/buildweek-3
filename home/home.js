const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=geolier"

window.onload = async() => {
    try{
    const response = await fetch(url);
    const songs = await response.json();
    console.log(songs);

    let divArtist = document.getElementById("card-hero-home")

    divArtist.innerHTML = dischi.map(song => `
            <div class="d-flex">
                <div>
                    <img src="https://picsum.photos/100/100" alt="">
                </div>
                <div class="d-flex flex-column mx-3">
                    <span>ALBUM</span>
                    <h3>${song.title}</h3>
                    <span class="fs-6">${song.name}</span>
                    <span>Ascolta il tuo nuovo singolo di ${song.name}</span>
                    <div> 
                        <button class="button-play-home" type="button"> Play </button>
                        <button class="button-salva-home" type="button"> Salva </button>
                    </div>
                </div>
                <div>
                    <span class="ms-5">4 ore</span>
                </div>
            </div>
        `).join('');
    }  catch (error){
        console.error('error', error )
    }    
}