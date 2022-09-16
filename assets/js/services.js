const books = [];
const cart = [];
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
function showHidden(selector, element) {
  let boton = document.querySelector(selector);
  boton.addEventListener("click", () => {
    let div = document.querySelector(element);
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
}

showHidden("#cart", ".cart");
//load books: load the books to the pages

const loadBook = (books) => {
  let holdBook = document.querySelector(".holdBookCard");
  let bookHtml = document.querySelector(".book");
  if (bookHtml) {
    holdBook.innerHTML = "";
  }
  for (const book of books) {
    let div = document.createElement("div");
    div.setAttribute("class", " book");
    div.innerHTML = `
    <div class="card hoverable">
    <div class="card-image">
    <img src=${book.img}>
    
    <a id=${
      book.id
    } class="addBook btn-floating halfway-fab waves-effect waves-light lime lighten-1"><i class="material-icons">add</i></a>
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
    if (bookHtml) {
    }
    holdBook.appendChild(div);
  }
};
loadBook(books);

///search book

const formBook = document.querySelector("#searchBook");

const SearchBooks = () => {
  debugger;
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
  for (const book of cart) {
    let div = document.createElement("div");
    div.setAttribute("class", "collection-item avatar book-added");
    div.innerHTML = `
      <img src=${book.img} class="circle">
      <span class="title">${book.name}</span>
      <p>Cantidad: ${book.quantity}<br>
      Precio: ${formatPrice(book.price)}
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          `;
    holdAddBook.appendChild(div);
  }
};

const addBooks = () => {
  btns = document.querySelectorAll(".addBook");
  for (const btn of btns) {
    btn.addEventListener("click", () => {
      debugger;
      let idBook = cart.find((book) => book.id == btn.id);
      if (idBook) {
        idBook.quantity++;
      } else {
        let book = books.find((book) => book.id == btn.id);
        if (book) {
          let newBook = {
            img: book.img,
            id: book.id,
            name: book.name,
            price: book.price,
            quantity: 1,
          };
          cart.push(newBook);
        }
      }
      addBookCart(cart);
      addBadge();
      changeBadge();
    });
  }
};

addBooks();

const totalbook = () => {
  const sum = cart.map((book) => book.quantity).reduce((a, b) => a + b, 0);
  return sum;
};

const addBadge = () => {
  debugger;
  let linkbad = document.querySelector("#cart");
  let badge = document.querySelector(".mi-badge");
  if (badge) {
  } else {
    let sup = document.createElement("sup");
    sup.setAttribute("class", "red center mi-badge flex");
    sup.innerHTML = `
          <p class="white-text badged"><b>${totalbook()}</b></p>
                `;
    linkbad.insertAdjacentElement("beforeend", sup);
  }
};

const changeBadge = () => {
  debugger;
  let badged = document.querySelector(".mi-badge");
  let sup = document.querySelector(".badged");
  if (sup) {
    badged.innerHTML = `<p class="white-text badged"><b>${totalbook()}</b></p>`;
  }
};

// products.filter(el => el.name.Includes(parameter) ? SearchBooks.push(el):);
