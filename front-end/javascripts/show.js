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

    static showGenres = []

    static genreFilter() {
        Show.shows.forEach(function (arrayItem) {
            let x = arrayItem.genre_id;
            Show.showGenres.push(x)
            
        })
    }

     
    static fetchShows() {
        fetch(showsURL)
            .then(resp => resp.json())
            .then(shows => {
                for(let show of shows.data) {
                    let newShow = new Show(show.attributes)
                    newShow.id = show.id
                }
                console.log(shows.data)
                this.renderShows()
                this.genreFilter()
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
        showCard.className = "card-group"
        this.showCard = showCard
        showCard.innerHTML = this.cardContents()
        card.appendChild(showCard)

        // showCard.addEventListener("click", function() {
        //     console.log("hello");            
      
        //   });
        let idx = this.id - 1
        likeButton[idx].addEventListener("click", function() {
            // console.log(Show.shows[idx].likes)
            likes[idx].innerText = `${Show.shows[idx].likes ++} Likes`
            // increaseLikes(Show.shows[idx])
            
        })
          
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
        <div class="like-counter">
            <div class="likes"> ${this.likes} Likes</div>
            <button class="like-button">♥</button>
        </div>

        </div>
      </div>`
        
      
    }

   

    // static increaseLikes(show) {
    //     let likes = 0
    //     fetch(`http://localhost:3000/shows/${show.id}`)
    //     .then(resp => resp.json())
    //     .then((data) => {
    //         likes = data.attributes.likes
    //     })

    //     let newLikes = likes + 1

    //     fetch("http://localhost:3000/shows/1", {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify({
    //             "likes": newLikes
    //         })
    //     })

    // }
  


    static submitShow() {
        // e.preventDefault()
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
            newShow.createShowCard()
            
        })
        
    }
}