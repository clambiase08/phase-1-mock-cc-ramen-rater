// write your code here

//As a user, I can:
// 1. See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// 2. Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// 3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// First Deliverable, I need to:
//[x] declaure a URL variable equal to the json server url
//[x] write a fetch function that takes in a url and returns a fetch
//[x] initialize the fetch on page load, passing in the URL and chaining a .then to iterate over the data with .forEach, passing in a render function into the forEach 
//[x] write a render function to render the ramen images to the div by creating an image tag, setting the src equal to the keys.data from the json object and appending it to the DOM


//Second Deliverable, I need to:
//[x] write a render function to render the ramen details to the div by selecting each of the HTML elements in global scope, then in the render function setting their text content equal to the keys.data from the json object
//[x] adding a click event listener to the image variable inside the render images function that passes in a click, and calls the render dish function

//Third Deliverable, I need to:
//[x] define variables in global scope for form and form inputs
//[x] add a submit event listener to the form that passes in a callback to render the new dish to the DOM
//[x] render the new dish inside the event listener, setting the content of the elements equal to the values submitted on the form


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


//Fetch function

function getRamens(url) {
    return fetch(url)
    .then(res => res.json())
}

//Initializer

getRamens(URL)
.then(ramenArr => ramenArr.forEach(renderImages))


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


// Event Listeners

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    detailPic.src = newImage.value
    ramenName.textContent = newName.value
    restaurant.textContent = newRestaurant.value
    rating.textContent = newRating.value
    comment.textContent = newComment.value
})