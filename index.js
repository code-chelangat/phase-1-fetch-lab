function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  return fetch ("https://anapioficeandfire.com/api/books")
  .then(res=> res.json)
  .then (data => renderBooks(data));
  
}


function renderBooks(books) {
 function renderBooks(books){

 };
}

document.addEventListener('DOMContentLoaded', function() {

  document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
});
