// Extra Advanced Deliverables
// You'll need these endpoints for the advanced deliverables:

// POST /ramens
// DELETE /ramens/:id
// PATCH /ramens/:id
// As a user, I can:

// persist my updates to a ramen's rating and comment. (PATCH request)
// persist new ramens that I create (POST request)
// persist any ramen deletions (DELETE request)


//First I need to:
//[] write a patch request inside the editDish function that sends the new info to the server

//Global variables

const URL = "http://localhost:3000/ramens"
const button = document.createElement('button')
button.textContent = "Delete Ramen"
let selectedRamen;


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
    image.id = ramens.name

    ramenBar.append(image)

    image.addEventListener('click', () => renderDish(ramens))
}

function renderDish(ramens) {
    selectedRamen = ramens
    detailPic.src = ramens.image
    ramenName.textContent = ramens.ramenName
    restaurant.textContent = ramens.restaurant
    rating.textContent = ramens.rating
    comment.textContent = ramens.comment

    ramenForm.appendChild(button)

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

button.addEventListener('click', () => {
    const ramenItem = ramenBar.querySelectorAll('img')
    ramenItem.forEach((ramen) => {
        if (ramen.id === selectedRamen.name) {
            ramen.remove()
        }
    })
})


//Handler functions

function editDish() {
    rating.textContent = editRating.value
    comment.textContent = editComment.value
    fetch (`${URL}/${selectedRamen.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rating: parseInt(rating.textContent),
            comment: comment.textContent,
        })
    })
    .then(res => res.json())
    .then(json => console.log(json))
}