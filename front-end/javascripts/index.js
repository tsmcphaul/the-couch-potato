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



document.addEventListener("DOMContentLoaded", () => {
    
    Genre.fetchGenres();
    Show.fetchShows();

})


showForm.style.display = 'none'
genreForm.style.display = 'none'

showForm.addEventListener("submit", function(e) {
    e.preventDefault
    Show.submitShow()
    
})

genreForm.addEventListener("submit", Genre.submitGenre) 

addShow.addEventListener("click", function() {
    showForm.style.display = 'inline'
})

addGenre.addEventListener("click", function() {
    genreForm.style.display = 'inline'
})


