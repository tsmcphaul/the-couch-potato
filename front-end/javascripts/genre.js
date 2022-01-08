class Genre {

    constructor(genre) {
        this.id = genre.id
        this.name =  genre.name; 
        Genre.genres.push(this)
    }

    static genres = [];

    static fetchGenres() {
        fetch(genresURL)
            .then(resp => resp.json())
            .then(genres => {
                for(let genre of genres.data) {
                    let newGenre = new Genre(genre.attributes)
                    newGenre.id = genre.id
                }
                console.log(genres.data)
                this.renderGenres()
            })
    }

    static renderGenres() {
        for (let genre of Genre.genres) {
            console.log(genre)
            genre.genreButton();
        }
    }

    genreButton() {
        let genreButton = document.createElement('button')
        genreButton.className = "genreButton"
        this.genreButton = genreButton
        genreButton.innerText = `${this.name} - ${this.id}`
        genreList.appendChild(genreButton)
        
        genreButton.addEventListener("click", function() {
            console.log(`click ${this.innerText}`)
            genreForm.style.display = 'none'
            showForm.style.display = 'none'
            showList.innerHTML = ""
            showList.className = "row row-cols-1 row-cols-md-3 g-4"
            const filteredShows = Show.shows.filter(s => {
                return s.genre_id == this.innerText.split('-')[1]
            })
            console.log(filteredShows)
            filteredShows.forEach(function(fs) {
                showList.innerHTML += fs.cardContents()
            })

        })
    }


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
            console.log(genre)
            let newGenre = new Genre(genre.attributes)
            newGenre.id = genre.id
        })
    }

}