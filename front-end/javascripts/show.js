class Show {

    constructor(show) {
        this.id = show.id;
        this.title =  show.title;
        this.network = show.network;
        this.year = show.year;
        this.season = show.season;
        this.image_link = show.image_link;
        this.likes = show.likes; 
        this.genre_id = show.genre_id;
        Show.shows.push(this)
    }

    static shows = [];
//fetch and render shows

    static fetchShows() {
        fetch(showsURL)
            .then(resp => resp.json())
            .then(shows => {
                for(let show of shows.data) {
                    let newShow = new Show(show.attributes)
                    newShow.id = show.id
                }
                this.renderShows()
            })
    }
    static renderShows() {
        for (let show of Show.shows) {
            show.createShowCard()
            
        }
    }
//creates show card for page

    createShowCard() {
        let showCard = document.createElement('div')
        showCard.className = "card-group"
        this.showCard = showCard
        showCard.innerHTML = this.cardContents()
        card.appendChild(showCard)
          
    }

    
    cardContents() {
        return ` <div class="col">
        <div class="card">
        <img src=${this.image_link} class="card-img-top" alt="...">
        <div class="card-body" >
          <h5 class="card-text">${this.title}</h5>
          <p class="card-text">Network: ${this.network}</p>
          <p class="card-text">Debuted: ${this.year}</p>
          <p class="card-text">Seasons: ${this.season}</p>
                 
        </div>

        </div>
      </div>`
        
    }
// post request to add new show
    static submitShow() {
        fetch(showsURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                title: titleInput.value,
                network: networkInput.value,
                year: yearInput.value,
                season: seasonInput.value,
                image_link: imageInput.value,
                genre_id: genreIdInput.value
                
            })
        })
        .then(resp => resp.json())
        .then(show => {
            let newShow = new Show(show.attributes)
            newShow.id = show.id 
        })
        
    }
    
}