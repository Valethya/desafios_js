///variables html
let container = document.querySelector(".containerBook");
let collection = document.querySelector(".collection");

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
  container.innerHTML = books.map((book) => bookCardStore(book)).join("");
};
//////
const bookCardStore = (books) => {
  const { img, id, name, author, editorial, price } = books;
  return `
  <div class="book">
  <div class="card hoverable">
    <div class="card-image">
      <img src=${img}>
      <a class="btn-floating halfway-fab waves-effect waves-light lime lighten-1"><i class="material-icons addBook"
          data-id=${id}>add</i></a>
    </div>
    <div class="card-content">
      <div class="title-card">
        <span class="card-title">${name}</span>
      </div>
      <p>${author}</p>
      <p>${editorial}</p>
      <p class="teal-text"><b>${formatPrice(price)}</b></p>
    </div>
  </div>
</div>
`;
};
///no cargan los productos
const noLoadBooks = () => {
  container.innerHTML += `
  <div class="ups z-depth-5 col s10">
  <span>Uuuups</span>
  <img src="assets/img/grillo.png" alt="grillo">
  <p class="center-align">tenemos problemas al cargar los productos</p>
</div>
`;
};
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

//crea el html del libro
const createBookInCart = (cart) => {
  const { img, id, name, quantity, price } = cart;
  return `
    <div class="collection-item avatar book-added">
  <img src=${img} class="circle">
  <span class="title teal-text"><b>${name}</b></span>
  <p>Cantidad: ${quantity}<br>
    Precio: ${formatPrice(price)}<br>
    total:<b>${formatPrice(price * quantity)}</b>
  </p>
  <a href="#!" class="secondary-content "><i class="material-icons delete-book "
      data-id=${id}>delete_outline</i></a>
</div>
`;
};

///agregar producto

const addBookCart = () => {
  collection.innerHTML = cart.map((book) => createBookInCart(book)).join("");
};

//si el libro ya esta en el array cart solo se suman mas a la cantidad

const sumQuantityOfBooks = (idBook) => {
  idBook.quantity == idBook.availability
    ? alert("no tenemos mas unidades :( ")
    : idBook.quantity++;
};

// si el libro no esta en el array cart se agrega al array

const addBookArrayCart = (idBtn) => {
  let book = books.find((book) => book.id == idBtn);
  let cartBook = {
    ...book,
    quantity: 1,
  };

  cart.push(cartBook);
};

//escucha de btns para agregar libro al carrito

function addBook(e) {
  if (e.target.classList.contains("addBook")) {
    let idBtn = e.target.getAttribute("data-id");
    let idBook = cart.find((book) => book.id == idBtn);

    idBook ? sumQuantityOfBooks(idBook) : addBookArrayCart(idBtn);

    addBookCart(cart);
    addfinalpriceCart();
    addCounter();
    saveInLocalStorage("cart", cart);
  }
}

//escuchando evento para agregar libro
container.addEventListener("click", addBook);

///suma total de productos del carrito

const totalbook = () => {
  const sum = cart.reduce((acc, book) => acc + book.quantity, 0);
  return sum;
};
////
//precio total del carrito

const finalPriceCart = () => {
  const finalPrice = cart.reduce(
    (acc, book) => acc + book.price * book.quantity,
    0
  );
  return finalPrice;
};

// agregar al html el valor total del carrito

const addfinalpriceCart = () => {
  collection.innerHTML += `<li class="collection-item buy bottom total-price">
  <span class="title">TOTAL</span>
  <p class="total teal-text">
  ${formatPrice(finalPriceCart())}
    </p>
    <button type="button" class="btn buy margin col s2 m2">
    Comprar
  </button> `;
};

// cambiar el contador del counter o eliminar si el contador llega a 0

const changeCounter = () => {
  let sup = document.querySelector(".mi-counter");
  let counter = document.querySelector(".counter");
  let cart = document.querySelector("#cart");
  totalbook() === 0
    ? cart.removeChild(sup)
    : (counter.innerText = `${totalbook()}`);
};

// agregar counter al icono de carrito

const addCounter = () => {
  let cart = document.querySelector("#cart");
  let counter = document.querySelector(".mi-counter");
  if (!counter) {
    let sup = document.createElement("sup");
    sup.setAttribute("class", "red center mi-counter flex");
    sup.innerHTML = `
            <p class="white-text"><b class="counter">${totalbook()}</b></p>
                  `;
    cart.insertAdjacentElement("beforeend", sup);
  }
  changeCounter();
};

//eliminar libro del carrito

collection.addEventListener("click", deleteBook);

//eliminar cantidad de libros o el libro mismo del carrito

function deleteBook(e) {
  debugger;
  let idBook = e.target.getAttribute("data-id");
  idBook = cart.find((book) => book.id == idBook);
  saveInLocalStorage("remove", idBook);
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
////alert compra exitosa
const successfulPurhcase = () => {
  Swal.fire({
    title: "Tu compra ha sido Exitosa!",
    text: `ok para continuar`,
  });
};

////
collection.addEventListener("click", buy);
///
function buy(e) {
  debugger;
  if (e.target.classList.contains("buy")) {
    let length = cart.length;
    cart.splice(0, length);

    addBookCart(cart);
    changeCounter();
    successfulPurhcase();
    emptyCart();
    saveInLocalStorage("cart", cart);
    showHidden(".cart", "flex");
  }
}

/////carrito vacio
const emptyCart = () => {
  let div = document.createElement("li");
  div.setAttribute("class", "collection-item avatar book-added");
  div.innerHTML = `
      <img class="cricket"src="assets/img/grillo.png"><img>
    <p class="text-accent-3 teal-text"><b>Aquí no hay nada!</b></p>
  `;
  collection.innerHTML = "";
  collection.appendChild(div);
};
/////eliminar ultimo libro del carrito
const deleteLastBook = () => {
  if (collection.children.length == 1) {
    emptyCart();
    showHidden(".cart", "flex");
  }
  saveInLocalStorage("cart", cart);
};

// guardar en el local storage

const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// recuperar del local storage

const recoveryLocalStorage = () => {
  if (localStorage.getItem("cart")) {
    let recoveryCart = JSON.parse(localStorage.getItem("cart"));
    recoveryCart.forEach((book) => {
      cart.push(book);
    });
  }
  if (cart.length > 0) {
    addBookCart(cart);
    addfinalpriceCart();
    addCounter();
  }
};

recoveryLocalStorage();

///publicidad
/// se guarda en el local storage los libros eliminados del carrito
const publicity = [];
const recoveryRemoveLocalStorage = () => {
  if (localStorage.getItem("remove")) {
    let recoveryRemove = JSON.parse(localStorage.getItem("remove"));
    publicity.pop();
    publicity.push(recoveryRemove);
  }
};
////// muestra el ultimo libro borrado del carrito en la sesion anterior
const publicityLastBookRemove = () => {
  Swal.fire({
    imageUrl: publicity[0].img,
    title: publicity[0].name,
    text: `precio: ${formatPrice(publicity[0].price)}`,
    backdrop: false,
    position: "bottom-end",
    showDenyButton: false,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "agregar al carrito",
  }).then((result) => {
    if (result.isConfirmed) {
      idBtn = publicity[0].id;
      let idBook = cart.find((book) => book.id == idBtn);
      idBook ? sumQuantityOfBooks(idBook) : addBookArrayCart(idBtn);
      addBookCart(cart);
      addfinalpriceCart();
      addCounter();
      saveInLocalStorage("cart", cart);
    }
  });
};
recoveryRemoveLocalStorage();
setTimeout(publicityLastBookRemove, 3000);
