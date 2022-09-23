// formateo de precios

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);
};

//

listenerShowHidden("#cart", ".cart", "flex");
listenerShowHidden("#remove", ".cart", "flex");
///
//load books: load the books to the pages

const loadBook = (books) => {
  let container = document.querySelector(".holdBookCard");
  let element = document.querySelector(".book");
  if (element) {
    container.innerHTML = "";
  }
  for (const book of books) {
    let div = document.createElement("div");
    div.setAttribute("class", " book");
    div.innerHTML = `
      <div class="card hoverable">
      <div class="card-image">
      <img src=${book.img}>
      
      <a  class="btn-floating halfway-fab waves-effect waves-light lime lighten-1"><i class="material-icons addBook" data-id=${
        book.id
      }>add</i></a>
      </div>
      <div class="card-content">
      <div class="title-card">
          <span class="card-title">${book.name}</span>
          </div>
          <p>${book.author}</p>
          <p>${book.editorial}</p>
          <p class="teal-text"><b>${formatPrice(book.price)}<b></p>
      </div>
  </div>
          `;
    if (element) {
    }
    container.appendChild(div);
  }
};
loadBook(books);

///search book

const formBook = document.querySelector("#searchBook");

formBook.addEventListener("submit", (e) => {
  e.preventDefault();

  SearchBooks(loadBook);
});

formBook.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === 13) {
    SearchBooks(loadBook);
  }
});

///carrito de compras

///agregar producto
const addBookCart = (cart) => {
  let holdAddBook = document.querySelector(".collection");
  let bookAdded = document.querySelector(".book-added");
  if (bookAdded) {
    holdAddBook.innerHTML = "";
  }
  createBookInCart(cart, holdAddBook);
};
//crea el html del libro
const createBookInCart = (cart, holdAddBook) => {
  for (const book of cart) {
    let div = document.createElement("li");
    div.setAttribute("class", "collection-item avatar book-added");
    div.innerHTML = `
        <img src=${book.img} class="circle">
        <span class="title teal-text"><b>${book.name}</b></span>
        <p>Cantidad: ${book.quantity}<br>
        Precio: ${formatPrice(book.price)}<br>
        total:<b>${formatPrice(parseInt(book.price * book.quantity))}</b>
        </p>
        <a href="#!"  class="secondary-content "><i class="material-icons delete-book "  data-id=${
          book.id
        }>delete_outline</i></a>
            `;
    holdAddBook.appendChild(div);
  }
};

/// agregar libro al carrito

let holdBookCard = document.querySelector(".holdBookCard");
//escuchando evento para agregar libro
holdBookCard.addEventListener("click", addBook);

//si el libro ya esta en el array cart solo se suman mas a la cantidad
const sumQuantityOfBooks = (idBook) => {
  if (idBook.quantity == idBook.availability) {
    alert("no tenemos mas unidades :( ");
  } else {
    idBook.quantity++;
  }
};

// si el libro no esta en el array cart se agrega al array
const addBookArrayCart = (idBtn) => {
  let book = books.find((book) => book.id == idBtn);
  if (book) {
    book.quantity = 1;
    cart.push(book);
  }
};
//escucha de btns para agregar libro al carrito
function addBook(e) {
  if (e.target.classList.contains("addBook")) {
    let idBtn = e.target.getAttribute("data-id");
    let idBook = cart.find((book) => book.id == idBtn);
    if (idBook) {
      sumQuantityOfBooks(idBook);
    } else {
      addBookArrayCart(idBtn);
    }
    addBookCart(cart);
    addfinalpriceCart();
    addCounter();
    saveInLocalStorage("cart", cart);
  }
}

///suma total de productos del carrito

const totalbook = () => {
  const sum = cart.map((book) => book.quantity).reduce((a, b) => a + b, 0);
  return sum;
};

//precio total del carrito
const finalPriceCart = () => {
  const finalPrice = cart
    .map((book) => parseInt(book.price * book.quantity))
    .reduce((a, b) => a + b, 0);
  return finalPrice;
};
// agregar al html el valor total del carrito
const addfinalpriceCart = () => {
  debugger;
  let container = document.querySelector(".collection");
  let div = document.createElement("li");
  div.setAttribute("class", "collection-item bottom total-price");
  div.innerHTML = `
        <span class="title">TOTAL</span>
        <p class="total teal-text">
        ${formatPrice(finalPriceCart())}
          </p>  `;
  container.appendChild(div);
};

// agregar counter al icono de carrito

const addCounter = () => {
  let linkbad = document.querySelector("#cart");
  let counter = document.querySelector(".mi-counter");
  if (!counter) {
    let sup = document.createElement("sup");
    sup.setAttribute("class", "red center mi-counter flex");
    sup.innerHTML = `
            <p class="white-text counter"><b>${totalbook()}</b></p>
                  `;
    linkbad.insertAdjacentElement("beforeend", sup);
  }
  changeCounter();
};
// cambiar el contador del counter o eliminar si el contador llega a 0
const changeCounter = () => {
  let sup = document.querySelector(".mi-counter");
  let counter = document.querySelector(".counter");
  if (totalbook() === 0) {
    let cart = document.querySelector("#cart");
    cart.removeChild(sup);
  } else if (counter) {
    sup.innerHTML = `<p class="white-text counter"><b>${totalbook()}</b></p>`;
  }
};

//eliminar libro del carrito

let collection = document.querySelector(".collection");

collection.addEventListener("click", deleteBook);

//eliminar cantidad de libros o el libro mismo del carrito
function deleteBook(e) {
  let idBook;
  if (e.target.classList.contains("delete-book")) {
    idBook = e.target.getAttribute("data-id");
    console.log(idBook);
    idBook = cart.find((book) => book.id == idBook);
  }
  if (idBook.quantity === 1) {
    let book = cart.find((book) => book.id == idBook.id);
    let index = cart.indexOf(book);
    cart.splice(index, 1);
  } else if (idBook) {
    idBook.quantity--;
  }
  addBookCart(cart);
  changeCounter();
  addfinalpriceCart();
  deleteLastBook();
}
//eliminar ultimo libro del carrito
const deleteLastBook = () => {
  if (collection.children.length == 1) {
    let holdAddBook = document.querySelector(".collection");
    let div = document.createElement("li");
    div.setAttribute("class", "collection-item avatar book-added");
    div.innerHTML = `
        <img class="cricket"src="assets/img/grillo.png"><img>
      <p class="text-accent-3 teal-text"><b>Aquí no hay nada!</b></p>
    `;
    holdAddBook.innerHTML = "";
    holdAddBook.appendChild(div);
    showHidden(".cart", "flex");
  }
  saveInLocalStorage("cart", cart);
};

// iformacion a guardar en el local storage localStorage

const recoveryLocalStorage = () => {
  if (localStorage.getItem("cart")) {
    let recoveryCart = JSON.parse(localStorage.getItem("cart"));
    recoveryCart.forEach((book) => {
      cart.push(book);
    });
  }
  addBookCart(cart);
  addfinalpriceCart();
  addCounter();
};

recoveryLocalStorage();
