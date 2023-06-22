// write your code here

//As a user, I can:
// 1. See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
// 2. Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
// 3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

// First Deliverable, I need to:
//[] declaure a URL variable equal to the json server url
//[] write a fetch function that takes in a url and returns a fetch
//[] initialize the fetch on page load, passing in the URL and chaining a .then to iterate over the data with .forEach, passing in a render function into the forEach 
//[] write a render function to render the ramen images to the div by creating an image tag, setting the src equal to the keys.data from the json object and appending it to the DOM

//Global variables

const URL = "http://localhost:3000/ramens"

//DOM Selectors

const ramenBar = document.querySelector('#ramen-menu')


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
}