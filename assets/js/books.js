let books = [];
const cart = [];

const arrBooks = async () => {
  const response = await fetch("assets/js/books.json");
  books = await response.json();
};

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
  20000,
  20,
  "assets/img/emma.jpg",
  "Jane Austen",
  "Penguin Clasicos",
  "9788491050582",
  "1"
);

let book2 = new book(
  "Mansfield Park",
  "Novela",
  23500,
  12,
  "assets/img/mansfield-park.jpg",
  "Jane Austen",
  "Penguin Clasicos",
  "9788491051695",
  "2"
);

let book3 = new book(
  "Persuasion",
  "Novela",
  18990,
  5,
  "assets/img/persuasion.jpg",
  "Jane Austen",
  "Penguien Clasicos",
  "9788491052777",
  "3"
);

let book4 = new book(
  "El silencio de los inocentes",
  "Thriller",
  19990,
  3,
  "assets/img/silence-lamb.jpg",
  "Thomas Harris",
  "Debolsillo",
  "8497599365",
  "4"
);

let book5 = new book(
  "Hannibal",
  "Thriller",
  21590,
  6,
  "assets/img/hannibal.jpg",
  "Thomas Harris",
  "Debolsillo",
  "9788483465080",
  "5"
);

let book6 = new book(
  "El zorro y la estrella",
  "Infantil",
  24950,
  2,
  "assets/img/fox-star.jpg",
  "Bickford-Smith",
  "Nube de tinta",
  "9788416588183",
  "6"
);

let book7 = new book(
  "wonder",
  "Infantil",
  10990,
  13,
  "assets/img/wonder.jpg",
  "R.j. Palacios",
  "Nube de tinta",
  "9871997019",
  "7"
);
let book8 = new book(
  "El Silmarillion",
  "Fantasia",
  22990,
  21,
  "assets/img/silmarillion.jpg",
  "J.R.R Tolkien",
  "Booket",
  "9788445013984",
  "8"
);
let book9 = new book(
  "EL hombre en busca de sentido",
  "Psicología",
  15000,
  10,
  "assets/img/hombreSentido.jpg",
  "Viktor Frankl",
  "Herder",
  "9788425432026",
  "9"
);

let book10 = new book(
  "El guardian entre el centeno",
  "Ficción",
  20000,
  15,
  "assets/img/guardianCenteno.jpg",
  "Jerome D. Salinger",
  "Edhasa",
  "9788435008952",
  "10"
);

let book11 = new book(
  "Corazón: Diario de un niño",
  "Novela",
  20000,
  15,
  "assets/img/corazon.jpg",
  "Edmundo De Amicis",
  "Createspace",
  "9781519574640",
  "11"
);

let book12 = new book(
  "Coaching para el éxito",
  "Autoayuda",
  25000,
  8,
  "assets/img/coachExito.jpg",
  "Talane Miedaner",
  "Urano",
  "9788479534905",
  "12"
);

let book13 = new book(
  "El principito",
  "Infantil",
  15000,
  10,
  "assets/img/principito.jpg",
  "Talane Miedaner",
  "Salamandra",
  "9788418174193",
  "13"
);

let book14 = new book(
  "La cruzada en Jeans",
  "Infantil",
  20000,
  9,
  "assets/img/cruzadaJeans.jpg",
  "Thea Beckman",
  "Sm De ediciones",
  "9786072433540",
  "14"
);

let book15 = new book(
  "Fundación y tierra",
  "Ciencia Ficción",
  30000,
  5,
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

// bookArr();

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
const SearchBooks = (funcioncargar) => {
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
  debugger;
  let booksFound = books.filter(
    (book) =>
      book.name.toLowerCase().match(nameBook) ||
      book.author.toLowerCase().match(nameBook) ||
      book.editorial.toLowerCase().match(nameBook)
  );

  //name is filtered by category

  if (optionType == "") {
    funcioncargar(booksFound);
  } else if (optionType == "Todos") {
    funcioncargar(booksFound);
  } else {
    let booksFoundType = booksFound.filter((book) => book.type === optionType);
    funcioncargar(booksFoundType);
  }

  //filtrar solo categoria si no hay nombre
  if (booksFound == books && optionType == "Todos") {
    funcioncargar(books);
  } else if (booksFound == books) {
    let booksFound = books.filter((book) => book.type === optionType);
    funcioncargar(booksFound);
  }
};
