const books = [];
const cart = []; //no es una contante por que de momento no se como eliminar un producto del carro. solo puedo filtrarlo.
class book {
  constructor(
    nombre,
    tipo,
    precio,
    cantidad,
    imgUrl,
    author,
    editorial,
    isbn,
    id
  ) {
    this.name = nombre;
    this.type = tipo;
    this.price = precio;
    this.availability = cantidad;
    this.img = imgUrl;
    this.author = author;
    this.editorial = editorial;
    this.isbn = isbn;
    this.id = id;
  }
}

let book1 = new book(
  "Emma",
  "Novela",
  "20000",
  "20",
  "assets/img/emma.jpg",
  "Jane Austen",
  "Penguin Clasicos",
  "9788491050582",
  "1"
);

let book2 = new book(
  "Mansfield Park",
  "Novela",
  "23500",
  "12",
  "assets/img/mansfield-park.jpg",
  "Jane Austen",
  "Penguin Clasicos",
  "9788491051695",
  "2"
);

let book3 = new book(
  "Persuasion",
  "Novela",
  "18990",
  "5",
  "assets/img/persuasion.jpg",
  "Jane Austen",
  "Penguien Clasicos",
  "9788491052777",
  "3"
);

let book4 = new book(
  "El silencio de los inocentes",
  "Thriller",
  "19990",
  "3",
  "assets/img/silence-lamb.jpg",
  "Thomas Harris",
  "Debolsillo",
  "8497599365",
  "4"
);

let book5 = new book(
  "Hannibal",
  "Thriller",
  "21590",
  "6",
  "assets/img/hannibal.jpg",
  "Thomas Harris",
  "Debolsillo",
  "9788483465080",
  "5"
);

let book6 = new book(
  "El zorro y la estrella",
  "Infantil",
  "24950",
  "2",
  "assets/img/fox-star.jpg",
  "Bickford-Smith",
  "Nube de tinta",
  "9788416588183",
  "6"
);

let book7 = new book(
  "wonder",
  "Infantil",
  "10990",
  "13",
  "assets/img/wonder.jpg",
  "R.j. Palacios",
  "Nube de tinta",
  "9871997019",
  "7"
);
let book8 = new book(
  "El Silmarillion",
  "Fantasia",
  "22990",
  "21",
  "assets/img/silmarillion.jpg",
  "J.R.R Tolkien",
  "Booket",
  "9788445013984",
  "8"
);
let book9 = new book(
  "EL hombre en busca de sentido",
  "Psicología",
  "15000",
  "10",
  "assets/img/hombreSentido.jpg",
  "Viktor Frankl",
  "Herder",
  "9788425432026",
  "9"
);

let book10 = new book(
  "El guardian entre el centeno",
  "Ficción",
  "20000",
  "15",
  "assets/img/guardianCenteno.jpg",
  "Jerome D. Salinger",
  "Edhasa",
  "9788435008952",
  "10"
);

let book11 = new book(
  "Corazón: Diario de un niño",
  "Novela",
  "20000",
  "15",
  "assets/img/corazon.jpg",
  "Edmundo De Amicis",
  "Createspace",
  "9781519574640",
  "11"
);

let book12 = new book(
  "Coaching para el éxito",
  "Autoayuda",
  "25000",
  "8",
  "assets/img/coachExito.jpg",
  "Talane Miedaner",
  "Urano",
  "9788479534905",
  "12"
);

let book13 = new book(
  "El principito",
  "Infantil",
  "15000",
  "10",
  "assets/img/principito.jpg",
  "Talane Miedaner",
  "Salamandra",
  "9788418174193",
  "13"
);

let book14 = new book(
  "La cruzada en Jeans",
  "Infantil",
  "20000",
  "9",
  "assets/img/cruzadaJeans.jpg",
  "Thea Beckman",
  "Sm De ediciones",
  "9786072433540",
  "14"
);

let book15 = new book(
  "Fundación y tierra",
  "Ciencia Ficción",
  "30000",
  "5",
  "assets/img/fundacionTierra.jpg",
  "Isaac Asimov",
  "De Bolsillo",
  "9786073145015",
  "15"
);

const bookArr = () => {
  books.push(
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
    book8,
    book9,
    book10,
    book11,
    book12,
    book13,
    book14,
    book15
  );
};

bookArr();

// formateo de precios

const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);
};

//ordenar precios

function lowerPrice(arr) {
  arr.sort((a, b) => {
    return a.price - b.price;
  });
}

function higherPrice(arr) {
  arr.sort((a, b) => {
    return b.price - a.price;
  });
}
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

const SearchBooks = () => {
  //Variables de inputs
  let optionType = document.querySelector(".typeBook").value;
  let nameBook = document.querySelector("#searchBooks").value.toLowerCase();
  let optionPrice = document.querySelector(".orderPrice").value;

  //filtrar precios

  if (optionPrice === "menorMayor") {
    lowerPrice(books);
  } else if (optionPrice === "mayorMenor") {
    higherPrice(books);
  }

  //filtrar por nombre

  let booksFound = books.filter((book) =>
    book.name.toLowerCase().match(nameBook)
  );

  //name is filtered by category
  // if (booksFound != books) {
  if (optionType == "") {
    loadBook(booksFound);
  } else if (optionType == "Todos") {
    loadBook(booksFound);
  } else {
    let booksFoundType = booksFound.filter((book) => book.type === optionType);
    loadBook(booksFoundType);
  }
  //}
  //filtrar solo categoria si no hay nombre
  if (booksFound == books && optionType == "Todos") {
    loadBook(books);
  } else if (booksFound == books) {
    let booksFound = books.filter((book) => book.type === optionType);
    loadBook(booksFound);
  }
};

//// listener event submit
formBook.addEventListener("submit", (e) => {
  e.preventDefault();

  SearchBooks();
});

// listener event keycap enter

formBook.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.key === 13) {
    SearchBooks();
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
  if (e.target.classList.contains("delete-book")) {
    let idBook = e.target.getAttribute("data-id");
    console.log(idBook);
    idBook = cart.find((book) => book.id == idBook);

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
