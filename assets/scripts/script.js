const addBookBtn = document.getElementById("add-book-btn");

const searchBtn = document.getElementById("search-btn");

const books = [];

const renderBooks = (filter = "") => {
  const bookList = document.getElementById("book-list");

  if (books.length === 0) {
    bookList.classList.remove("visible");
    return;
  } else {
    bookList.classList.add("visible");
  }

  bookList.innerHTML = "";

  const filteredBooks = !filter
    ? books
    : books.filter((book) => book.info.title.includes(filter));

  filteredBooks.forEach((book) => {
    const bookEl = document.createElement("li");
    let text = "○ " + book.info.title + " By ";

    for (const key in book.info) {
      if (key !== "title") {
        text = text + `${key} : ${book.info[key]}`;
      }
    }
    bookEl.textContent = text;
    bookList.append(bookEl);
  });
};

const addBookHandler = () => {
  const title = document.getElementById("title").value;
  const authorName = document.getElementById("author-name").value;
  const ratingValue = document.getElementById("rating-value").value;

  if (
    title.trim() === "" ||
    authorName.trim() === "" ||
    ratingValue.trim() === ""
  ) {
    return;
  }

  const newBook = {
    info: { title, [authorName]: ratingValue },
    id: Math.random(),
  };

  books.push(newBook);
  renderBooks();
};

const searchBookHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderBooks(filterTerm);
};

const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
});

addBookBtn.addEventListener("click", addBookHandler);

searchBtn.addEventListener("click", searchBookHandler);
