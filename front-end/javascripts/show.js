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
        }
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