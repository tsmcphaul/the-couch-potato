class Genre {

    constructor(id, name) {
        this.id = id
        this.name =  name; 
        Genre.genres.push(this)
    }

    static genres = [];

// fetch and render genres
    static fetchGenres() {
        fetch(genresURL)
            .then(resp => resp.json())
            .then(genres => {
                for(let genre of genres.data) {
                    console.log(genre)
                    new Genre(genre.id, genre.attributes.name)
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
            addGenre.style.display = 'none'
            addShow.style.display = 'none'
            showList.innerHTML = ""
            showList.className = "row row-cols-1 row-cols-md-3 g-4"
            const filteredShows = Show.shows.filter(s => {
                 return s.genre_id === parseInt(this.innerText.split('-')[1])
            })
            console.log(filteredShows)
            // let idx = 0
            filteredShows.forEach(function(fs) {
                console.log(fs)
                
                showList.innerHTML += fs.cardContents()
                // cardBody[fs.id-1].appendChild(Show.shows[fs.id-1].deleteButton)
                // cardBody[idx].appendChild(Show.shows[fs.id-1].deleteButton)
                // idx++
                // cardBody[fs.id-1].innerHTML = fs.deleteButton()
                // showList.innerHTML += fs.deleteButton()
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
            // console.log(genre)
            const newGenre = new Genre(genre.data.id, genre.data.attributes.name)
            newGenre.genreButton()
            genreForm.style.display = 'none'
        })
    }

    // static deleteGenre() {
    //     const deleteId = parseInt(deleteInput.value)
    //     fetch(`${genresURL}/${deleteId}`, {
    //         method: 'DELETE'
    //     })
    //     // .then(() => {
    //     //     Genre.genres[deleteId-1].remove()
    //     // })
    // }



}