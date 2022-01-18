class Show {

    constructor(id, title, network, year, season, image_link, likes, genre_id) {
        this.id = id;
        this.title =  title;
        this.network = network;
        this.year = year;
        this.season = season;
        this.image_link = image_link;
        this.likes = likes; 
        this.genre_id = genre_id;
        Show.shows.push(this)
    }

    static shows = [];
//fetch and render shows

    static fetchShows() {
        fetch(showsURL)
            .then(resp => resp.json())
            .then(shows => {
                for(let show of shows.data) {
                    console.log(show)
                    new Show(show.id, show.attributes.title, show.attributes.network, show.attributes.year, show.attributes.season, show.attributes.image_link, show.attributes.likes, show.attributes.genre_id)
                    
                }
                this.renderShows()
            })
    }
    static renderShows() {
        for (let show of Show.shows) {
            show.createShowCard()
            // show.deleteButton()
            
        }
    }
//creates show card for page

    createShowCard() {
        let cardGroup = document.createElement('div')
        cardGroup.className = "card-group"
        this.cardGroup  = cardGroup
        cardGroup.innerHTML = this.cardContents()
        card.appendChild(cardGroup)
        
          
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
    //   <button class='btn btn-danger'>Delete ${this.title}</button>
    }

    // deleteButton() {
        
    //     console.log(this.title)
    //     let deleteButton = document.createElement('button')
    //     deleteButton.className = "btn btn-danger"
    //     deleteButton.innerText = `DELETE ${this.title}`
    //     this.deleteButton = deleteButton
    //     cardBody[this.id-1].appendChild(deleteButton)

    //     deleteButton.addEventListener('click', function() {
    //         console.log(deleteButton.innerText.slice(7)) 
    //         let show = Show.shows.find(s => {
    //             return s.title === deleteButton.innerText.slice(7)
    //         })
    //         console.log(parseInt(show.id))
    //         fetch(`${showsURL}/${parseInt(show.id)}`, {
    //             method: 'DELETE'
    //         })
    //         .then(() => {
                
    //             showList.innerHTML -= showCard[show.id-1]
    //             Show.shows.splice(show.id-1,1)
                
    //             // showList.append(Show.fetchShows())
    //             // showCard[parseInt(show.id)-1].parentElement.removeChild(showCard[parseInt(show.id)-1])
        
    //         })
    //     })
        

    // }
        
     

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
           console.log(show)
            const newShow = new Show(show.data.id, show.data.attributes.title, show.data.attributes.network, show.data.attributes.year, show.data.attributes.season, show.data.attributes.image_link, show.data.attributes.likes, show.data.attributes.genre_id)
            console.log(newShow)
            showList.className = "row row-cols-1 row-cols-md-3 g-4"
            showList.innerHTML += newShow.cardContents()
            // this.cardBody = cardBody
            // newShow.deleteButton()
            // let cardGroup = document.createElement('div')
            // cardGroup.className = "card-group"
            // cardBody[newShow.id-1].appendChild([newShow.id-1].deleteButton)
            showForm.reset()
            showForm.style.display = 'none'
            // Show.shows.splice(newShow.id-1,1)
        })
        
    }
    
    
}