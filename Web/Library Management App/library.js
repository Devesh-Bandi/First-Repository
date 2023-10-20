const inputEl = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const loader = document.getElementById("loader");

function insertBooks(books) {
  let resultEl = "";
  if (books.length) {
    let booksEl = "";
    for (const book of books) {
      booksEl += `
         <div class="book">
            <div class="book__img">
               <img
                  src="${book.imageLink}"
                  alt="${book.title}">
            </div>
            <p class="book__author">${book.author}</p>
         </div>`;
    }
    resultEl = `
         <h1 class='main__title'>Popular books</h1>
         <div class='main__content'>${booksEl}</div>`;
  } else {
    resultEl = '<h1 class="main__title_no-found">No results found</h1>';
  }
  searchResults.innerHTML = resultEl;
}

async function getBooks(event) {
  if (event.key === "Enter") {
    try {
      searchResults.innerHTML = "";
      loader.classList.remove("loader__hidden");
      const link = event.target.value;
      const response = await fetch(
        `https://apis.ccbp.in/book-store?title=${link}`
      );
      const data = await response.json();
      const books = data.search_results;
      insertBooks(books);
      loader.classList.add("loader__hidden");
    } catch (e) {
      console.log(e);
      loader.classList.add("loader__hidden");
    }
  }
}

inputEl.addEventListener("keypress", getBooks);
