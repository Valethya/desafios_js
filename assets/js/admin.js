//carga de los libros en la pagina de administrador
const loadBookTable = (books) => {
  let container = document.querySelector(".tableBook");
  let element = document.querySelector(".book");
  if (element) {
    container.innerHTML = "";
  }
  for (const book of books) {
    let div = document.createElement("tr");
    div.setAttribute("class", "bookTable book");
    div.innerHTML = ` 

      <th>${book.name}</th>
      <th>${book.author}</th>
      <th>${book.editorial}</th>
      <th>${book.type}</th>
      <th>${book.isbn}</th>
      <th><img class="imgTable" src="${book.img}"></th>
      <th>${book.id}</th>
      <th><input  value="${book.availability}" type="number" data-id="${book.id}" class="${book.id} quantity"></th>
      <th><input  value="${book.price}" type="number" data-id="${book.id}" class="${book.id} price"></th>

  `;
    if (element) {
    }
    container.appendChild(div);
  }
};

loadBookTable(books);

/// filtrando libros

const formBook = document.querySelector("#searchBook");

formBook.addEventListener("submit", (e) => {
  debugger;
  e.preventDefault();

  SearchBooks(loadBookTable);
});

//cambiando el precio de los libros
let bookTable = document.querySelector(".tableBook");

const changePriceBook = (e) => {
  debugger;
  let book;
  let value;
  let newprice = e.target.value;
  if (e.target.classList.contains("price")) {
    let idBook = e.target.getAttribute("data-id");
    book = books.find((book) => book.id == idBook);
    book.price = newprice;
  }
  loadBookTable(books);
};

bookTable.addEventListener("change", changePriceBook);

//sumando cantidad de libros

const sumBooks = (e) => {
  debugger;
  let book;
  let value;
  let newQuantity = e.target.value;
  if (e.target.classList.contains("quantity")) {
    let idBook = e.target.getAttribute("data-id");
    book = books.find((book) => book.id == idBook);
    book.availability = parseInt(book.availability) + parseInt(newQuantity);
  }
  loadBookTable(books);
};

bookTable.addEventListener("change", sumBooks);

//cargar nuevos libros
