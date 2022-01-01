class Genre {

    constructor(genre) {
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
                }
                console.log(genres.data)
                this.renderGenres()
            })
    }

    static renderGenres() {
        for (let genre of Genre.genres) {
            console.log(genre)
            genre.createGenreButton();
        }
    }

    createGenreButton() {
        let genreButton = document.createElement('button')
        genreButton.className = "genreButton"
        this.genreButton = genreButton
        genreButton.innerText = `${this.name}`
        genreList.appendChild(genreButton)
 
    }
    
    

}