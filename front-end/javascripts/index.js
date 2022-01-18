// globals

const showsURL = "http://localhost:3000/shows";
const genresURL = "http://localhost:3000/genres";
const showForm = document.getElementById("add-show-form");
const genreForm = document.getElementById("add-genre-form");
const addGenre = document.getElementById("add-genre-button-form")
const addShow = document.getElementById("add-button-form")
const titleInput = document.getElementById("title-input");
const networkInput = document.getElementById("network-input");
const yearInput = document.getElementById("year-input")
const seasonInput = document.getElementById("season-input");
const imageInput = document.getElementById("image-link-input");
const genreIdInput = document.getElementById("genre-id-input")
const nameInput = document.getElementById("name-input");
const deleteInput = document.getElementById("delete-input")
const showList = document.getElementById("shows-list");
const genreList = document.getElementById("genre-list");
const card = document.getElementById("card");
const showCard = document.getElementsByClassName("col")
const likeButton = document.getElementsByClassName("like-button")
const genreButtons = document.getElementsByClassName("genreButton")
const showsButton = document.getElementById("all-shows-button")
let cardBody = document.getElementsByClassName('card-body')
let cardGroup = document.getElementsByClassName('card-group')
const deleteButton = document.getElementsByClassName('btn btn-danger')


showForm.style.display = 'none'
genreForm.style.display = 'none'

// document load
// document.addEventListener("DOMContentLoaded", () => {
    
    Genre.fetchGenres();
    Show.fetchShows();

// })

//event listeners

showForm.addEventListener("submit", (e) => {
    e.preventDefault()
    Show.submitShow()
    // return Show.fetchShows();
})

genreForm.addEventListener("submit", (e) => {
    e.preventDefault()
    Genre.submitGenre()
    // return Genre.fetchGenres();
}) 

addShow.addEventListener("click", function() {
    showForm.style.display = 'inline'
})

addGenre.addEventListener("click", function() {
    genreForm.style.display = 'inline'
})



showsButton.addEventListener("click", function() {
    genreForm.style.display = 'none'
    showForm.style.display = 'none'
    addGenre.style.display = 'block'
    addShow.style.display = 'block'
    showList.innerHTML = ""
    showList.className = "row row-cols-1 row-cols-md-3 g-4"
    let cardGroup = document.createElement('div')
    cardGroup.className = "card-group"

    // for (let s of Show.shows) {
    //     s.create
    // }
    
    Show.shows.forEach(function(s) {
        console.log(s)
    
        showList.innerHTML += s.cardContents()
        // cardBody[parseInt(s.id-1)].deleteButton
        // showCard[s.id-1].appendChild(Show.shows[s.id-1].deleteButton)
        // cardBody.innerHTML = s.deleteButton()
        // let deleteButton = document.createElement('button')
        // deleteButton.className = "btn btn-danger"
        // deleteButton.innerText = `DELETE ${s.title}`
        // cardBody[s.id-1].appendChild(deleteButton)
    })

    // for( let i=0; i<deleteButton.length; i++) {
    //     deleteButton[i].addEventListener('click', function() {
    //         console.log(deleteButton[i].innerText.slice(7)) 
    //         let show = Show.shows.find(s => {
    //             return s.title === deleteButton[i].innerText.slice(7)
    //         })
    //         console.log(parseInt(show.id))
    //         fetch(`${showsURL}/${parseInt(show.id)}`, {
    //             method: 'DELETE'
    //         })
    //         .then(() => {
                
    //             showList.innerHTML -= showCard[show.id-1]
    //             Show.shows.splice(show.id-1,1)
    //             showList.innerHTML += s.cardContents()
                
    //             // showList.append(Show.fetchShows())
    //             // showCard[parseInt(show.id)-1].parentElement.removeChild(showCard[parseInt(show.id)-1])
        
    //         })
    //     })
    //     }

})


