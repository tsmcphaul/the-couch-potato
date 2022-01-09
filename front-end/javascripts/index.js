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
const showList = document.getElementById("shows-list");
const genreList = document.getElementById("genre-list");
const card = document.getElementById("card");
const showCard = document.getElementsByClassName("card")
const likeButton = document.getElementsByClassName("like-button")
const likes = document.getElementsByClassName("likes")
const genreButtons = document.getElementsByClassName("genreButton")
const showsButton = document.getElementById("all-shows-button")

showForm.style.display = 'none'
genreForm.style.display = 'none'

// document load
document.addEventListener("DOMContentLoaded", () => {
    
    Genre.fetchGenres();
    Show.fetchShows();

})

//event listeners

showForm.addEventListener("submit", function(e) {
    e.preventDefault
    Show.submitShow()
    return Show.fetchShows();
})

genreForm.addEventListener("submit", function(e) {
    e.preventDefault
    Genre.submitGenre()
    return Genre.fetchGenres();
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
    showList.innerHTML = ""
    showList.className = "row row-cols-1 row-cols-md-3 g-4"
    Show.shows.forEach(function(s) {
        showList.innerHTML += s.cardContents()
    })
})
