class Genre {

    constructor(genre) {
        this.id = genre.id
        this.name =  genre.name; 
        Genre.genres.push(this)
    }

    static genres = [];

// fetch and render genres
    static fetchGenres() {
        fetch(genresURL)
            .then(resp => resp.json())
            .then(genres => {
                for(let genre of genres.data) {
                    let newGenre = new Genre(genre.attributes)
                    newGenre.id = genre.id
                }
                this.renderGenres()
            })
    }

    static renderGenres() {
        for (let genre of Genre.genres) {
            genre.genreButton();
        }
    }

//create genre button and filter event listener
    genreButton() {
        let genreButton = document.createElement('button')
        genreButton.className = "genreButton"
        this.genreButton = genreButton
        genreButton.innerText = `${this.name} - ${this.id}`
        genreList.appendChild(genreButton)
        
        genreButton.addEventListener("click", function() {
            genreForm.style.display = 'none'
            showForm.style.display = 'none'
            showList.innerHTML = ""
            showList.className = "row row-cols-1 row-cols-md-3 g-4"
            const filteredShows = Show.shows.filter(s => {
                return s.genre_id == this.innerText.split('-')[1]
            })
            filteredShows.forEach(function(fs) {
                showList.innerHTML += fs.cardContents()
            })

        })
    }

// post request to create new genre
    static submitGenre() {
        fetch(genresURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                name: nameInput.value
                
            })
        })
        .then(resp => resp.json())
        .then(genre => {
            let newGenre = new Genre(genre.attributes)
            newGenre.id = genre.id
        })
    }

}