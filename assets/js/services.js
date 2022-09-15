const books = [];

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

const bookArr = () => {
  books.push(book1, book2, book3, book4, book5, book6, book7, book8);
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

//load books

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
    
    <a class="btn-floating halfway-fab waves-effect waves-light lime lighten-1"><i class="material-icons">add</i></a>
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

///found book

const formBook = document.querySelector("#searchBook");

//// listener event submit
formBook.addEventListener("submit", (e) => {
  e.preventDefault();

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

  //el nombre se filtra por categoria
  if (booksFound != books) {
    if (optionType == "todos") {
      loadBook(booksFound);
    } else {
      let booksFoundType = booksFound.filter(
        (book) => book.type === optionType
      );
      loadBook(booksFoundType);
    }
  }
  //filtrar solo categoria si no hay nombre
  if (booksFound == books && optionType == "todos") {
    loadBook(books);
  } else if (booksFound == books) {
    let booksFound = books.filter((book) => book.type === optionType);
    loadBook(booksFound);
  }
});

// listener event keycap enter

formBook.addEventListener("keyup", (e) => {
  e.preventDefault();
  e.keycode === "enter";
  //Variables de inputs
  let optionType = document.querySelector(".typeBook").value;
  let nameBook = document.querySelector("#searchBooks").value;
  let optionPrice = document.querySelector(".orderPrice").value;

  //filtrar precios

  if (optionPrice === "menorMayor") {
    lowerPrice(books);
  } else if (optionPrice === "mayorMenor") {
    higherPrice(books);
  }

  //filtrar por nombre

  let booksFound = books.filter((book) => book.name.match(nameBook));

  //el nombre se filtra por categoria
  if (booksFound != books) {
    if (optionType == "todos") {
      loadBook(booksFound);
    } else {
      let booksFoundType = booksFound.filter(
        (book) => book.type === optionType
      );
      loadBook(booksFoundType);
    }
  }
  //filtrar solo categoria si no hay nombre
  if (booksFound == books && optionType == "todos") {
    loadBook(books);
  } else if (booksFound == books) {
    let booksFound = books.filter((book) => book.type === optionType);
    loadBook(booksFound);
  }
});

///carrito de compras
