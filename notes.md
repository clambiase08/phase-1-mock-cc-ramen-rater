
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
//[x] render the new dish to the top menu

//Advanced Deliverables:
// As a user, I can:

// See the details for the first ramen as soon as the page loads (without clicking on an image)
// Update the rating and comment for a ramen by submitting a form. Changes should be reflected on the frontend. No need to persist. You can add this HTML to the index.html file to create the edit form:

//Delete a ramen (you can add a "delete" button if you'd like, or use an existing element to handle the delete action). The ramen should be removed from the ramen-menu div, and should not be displayed in the ramen-detail div. No need to persist.

//First I need to:
//[x] add the render dish function inside the .then chain with an array key of [0] to show the first ramen on page load
//[x] declare the edit form and edit form input variables in global scope
//[x] add a submit event listener to the edit ramen form that passes in a callback to edit 
//[x] write an edit function to edit the rating and comment of the text content of those variables on the DOM based on the value of the inputs

//Then I need to:
//[x] add a delete button to the DOM with the text "Delete"
//[x] add a click even listener to the button that passes in a callback to remove the ramen data from both the menu and detail div

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
//[x] write a patch request inside the editDish function that sends the new info to the server

//Then I need to:
//[x] write a post request inside the render new dish function that sends the new ramen data to the server

//Finally, I need to:
//[x] add a delete request inside the button event listener to delete the selected ramen from the server