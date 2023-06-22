
//Advanced Deliverables:
// As a user, I can:

// See the details for the first ramen as soon as the page loads (without clicking on an image)
// Update the rating and comment for a ramen by submitting a form. Changes should be reflected on the frontend. No need to persist. You can add this HTML to the index.html file to create the edit form:

//First I need to:
//[x] add the render dish function inside the .then chain with an array key of [0] to show the first ramen on page load
//[x] declare the edit form and edit form input variables in global scope
//[x] add a submit event listener to the edit ramen form that passes in a callback to edit 
//[x] write an edit function to edit the rating and comment of the text content of those variables on the DOM based on the value of the inputs


//Global variables

const URL = "http://localhost:3000/ramens"

//DOM Selectors

const ramenBar = document.querySelector('#ramen-menu')
const detailPic = document.querySelector('.detail-image')
const ramenName = document.querySelector('.name')
const restaurant = document.querySelector('.restaurant')
const rating = document.querySelector("#rating-display")
const comment = document.querySelector("#comment-display")
const ramenForm = document.querySelector('#new-ramen')
const newImage = document.querySelector("#new-image")
const newName = document.querySelector("#new-name")
const newRestaurant = document.querySelector("#new-restaurant")
const newRating = document.querySelector("#new-rating")
const newComment = document.querySelector("#new-comment")
const editForm = document.querySelector("#edit-ramen")
const editRating = document.querySelector("#edit-rating")
const editComment = document.querySelector("#edit-comment")


//Fetch function

function getRamens(url) {
    return fetch(url)
    .then(res => res.json())
}

//Initializer

getRamens(URL)
.then(ramenArr => {
    ramenArr.forEach(renderImages)
    renderDish(ramenArr[0])
})


//Render functions

function renderImages(ramens) {
    const image = document.createElement('img')

    image.src = ramens.image

    ramenBar.append(image)

    image.addEventListener('click', () => renderDish(ramens))
}

function renderDish(ramens) {
    detailPic.src = ramens.image
    ramenName.textContent = ramens.ramenName
    restaurant.textContent = ramens.restaurant
    rating.textContent = ramens.rating
    comment.textContent = ramens.comment

}

function renderNewDish() {
    const image = document.createElement('img')
    image.src = newImage.value
    detailPic.src = newImage.value
    ramenName.textContent = newName.value
    restaurant.textContent = newRestaurant.value
    rating.textContent = newRating.value
    comment.textContent = newComment.value
    
    ramenBar.append(image)
}


// Event Listeners

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    renderNewDish()
})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    editDish()
})

//Edit function

function editDish() {
    rating.textContent = editRating.value
    comment.textContent = editComment.value
}