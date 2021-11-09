// MANDATORY JS EXERCISES (create a different file for this exercise)
// 1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
// 2) Create an unordered list using JavaScript and save it in a variable
let uLElement = document.createElement('ul')
// 3) Cycle the array and create a list-item via JavaScript for every element
genres.forEach(genre => {
    let listItem = document.createElement('li')
    listItem.innerHTML = genre
    console.log(listItem)
    uLElement.appendChild(listItem)
    /*document.querySelector('body').appendChild(uLElement)*/
})
// 4) Insert the genere as text in the list-item

// 5) Append the list items in the unordered list
// 6) Append the unordered list in the document. The list should appear in the page.