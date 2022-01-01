class Show {

    constructor(show) {
        this.title =  show.title;
        this.network = show.network;
        this.year = show.year;
        this.season = show.season;
        this.image_link = show.image_link;
        this.rating = show.rating; 
        this.genre_id = show.genre_id;
        Show.shows.push(this)
    }

    static shows = [];

     
    static fetchShows() {
        fetch(showsURL)
            .then(resp => resp.json())
            .then(shows => {
                for(let show of shows.data) {
                    let newShow = new Show(show.attributes)
                }
                console.log(shows.data)
                this.renderShows()
            })
    }
    static renderShows() {
        for (let show of Show.shows) {
            console.log(show)
            show.createShowCard()
        }
    }

    createShowCard() {
        let showCard = document.createElement('div')
        showCard.className = "showCard"
        this.showCard = showCard
        showCard.innerHTML = this.cardContents()
        showList.appendChild(showCard)

    }

    cardContents() {
        return `<div class="card" style="width: 18rem;">
        <img src=${this.image_link} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.title}</h5>
          
          <button class="btn btn-primary">More Info</button>
        </div>
      </div>`
    }

    // static submitShow(e) {
    //     e.preventDefault()
    //     fetch(showsURL, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //         },
    //         body: JSON.stringify({
    //             title: titleInput.value,
    //             network: networkInput.value,
    //             year: yearInput.value,
    //             season: seasonInput.value,
    //             image_link: imageInput.value,
    //             rating: ratingInput.value
    //         })
    //     })
    //     .then(resp => resp.json())
    //     .then(show => {
    //         let newShow = new Show(show.data)
    //         console.log(newShow)
    //     })
    // }
}