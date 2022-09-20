/////materialize init////

// document.addEventListener("DOMContentLoaded", function () {
//   var elems = document.querySelectorAll(".sidenav");
//   M.Sidenav.init(elems, {});
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var fab = document.querySelectorAll(".fixed-action-btn");
//   var instances = M.FloatingActionButton.init(fab, {});
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var drop = document.querySelectorAll(".dropdown-trigger");
//   M.Dropdown.init(drop);
// });

// ///////mi codigo///

// const usuarios = [];

// class user {
//   constructor(name, email, password, urlimg) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.img = urlimg;
//   }
// }

// let user1 = new user("her", "hernan", "12345", "assets/img/her.jpg");

// let user2 = new user("max", "maxi", "1542", "assets/img/maxi.jpg");

// let user3 = new user("maximo", "maximi", "1592", "assets/img/maximo.jpg");

// let user4 = new user("vale", "valentina", "1672", "assets/img/vale.jpg");

// usuarios.push(user1, user2, user3, user4);

// const getInputValue = (id) => {
//   document.getElementById(id).value;
// };

// ////mostrar u ocultar////
// //sign//
// ///esta funcion muestra u oculta el sign
// // const showHidden= (element) => {
// //   let div = document.querySelector(element);
// //   if (div.style.display === "none") {
// //     div.style.display = "block";
// //   } else {
// //     div.style.display = "none";
// //   }
// // };

// // window.addEventListener("load", initSign, false);
// //funcion para inicializar showhiddensign al hacer click en el boton
// function showHidden(selector, element, display) {
//   let boton = document.querySelector(selector);
//   boton.addEventListener("click", () => {
//     let div = document.querySelector(element);
//     if (div.style.display === "none") {
//       div.style.display = display;
//     } else {
//       div.style.display = "none";
//     }
//   });
// }

// showHidden(".sign", ".card-sign", "block");

// showHidden(".login", ".card-login", "block");

// /login///
// /esta funcion muestra u oculta el login
// const showHiddenLogin = () => {
//   let div = document.querySelector(".card-login");
//   if (div.style.display === "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// };

// window.addEventListener("load", initLogin, false);

// function initLogin() {
//   let boton = document.querySelector(".login");
//   boton.addEventListener("click", showHiddenLogin, false);
// }

/////creando nuevos usuario////
// const newUser = () => {
//   let name = document.getElementById("first_name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let confirmPassword = document.getElementById("password-confirm").value;
//   let passwordEnd = "";

//   do {
//     if (password === confirmPassword) {
//       passwordEnd = confirmPassword;
//     } else {
//       alert("la contraseña debe coincidir");
//     }
//   } while (password != confirmPassword);

//   let newUser = new user(name, email, passwordEnd);
//   usuarios.push(newUser);
// };
// // debugger;
// const addUser = () => {
//   let submite = document.querySelector("#newUser");

//   submite.addEventListener("click", () => {
//     let name = document.getElementById("first_name").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let confirmPassword = document.getElementById("password-confirm").value;
//     let passwordEnd = "";

//     do {
//       if (password === confirmPassword) {
//         passwordEnd = confirmPassword;
//       } else {
//         alert("la contraseña debe coincidir");
//       }
//     } while (password != confirmPassword);

//     let newUser = new user(name, email, passwordEnd);

//     usuarios.push(newUser);
//   });
// };
// addUser();

// window.addEventListener("load", addUser, false);

// let emailRecovery = usuarios.find((user) => user.email === email);
// const passwordREcovery = () => {
//   let email = prompt("ingresa tu email por favor").toLowerCase();
//   if (usuarios.find((user) => user.email === email)) {
//     let name = usuarios.find((user) => user.email === email).name;
//     confirm(
//       name + " te hemos enviado un email para reestablecer tu contraseña"
//     );
//   } else {
//     alert("este email no se encuentra registrado");
//   }
// };

// const login = () => {
//   let email = prompt("ingrese su email").toLowerCase();
//   let password = prompt("ingrese su contraseña").toLowerCase();

//   if (
//     usuarios.find((user) => user.email === email && user.password === password)
//   ) {
//     confirm("has logrado acceder exitosamente");
//   } else {
//     alert("la contraseña no coincide o el email no se encuentra registrado");
//     let confirmed = confirm("deseas recuperar tu contraseña?");
//     if (confirmed === true) {
//       passwordREcovery();
//     }
//   }
// };

// window.addEventListener("load", initLoginUser, false);

// function initLoginUser() {
//   let boton = document.querySelector(".login");
//   boton.addEventListener("click", login, false);
// }

// ////buscando amigos

// const holdFriend = () => {
//   let addholdFriend = document.querySelector(".bg-login");
//   addholdFriend.innerHTML += `<div class="holdFriend main container center-align"> <div class="nav-wrapper">
//   <form>
//     <div class="input-field">
//       <input id="searchFriends" type="search" placeholder="Busca a tus amigos" required>
//       <label class="label-icon" for="search"><i class="material-icons teal-text">search</i></label>
//       <i class="material-icons">close</i>
//     </div>
//   </form>
// </div><div class="cardFriend row"><div>`;
// };
// window.addEventListener("load", initHoldFriend, false);

// function initHoldFriend() {
//   let boton = document.querySelector(".searchFriend");
//   boton.addEventListener("click", holdFriend, false);
// }
// debugger;

/////

// const findFriends = () => {
//   let nameFriend = prompt("como se llama la persona que buscas?");
//   let friends = usuarios.filter((user) => user.name.match(nameFriend));
//   console.log(friends);
//   let nameObjetos = [];

//   let holdFriend = document.querySelector(".cardFriend");

//   for (const friend of friends) {
//     let div = document.createElement("div");
//     div.setAttribute("class", "col s10 m4");
//     div.innerHTML = `

//         <div class="card">
//           <div class="card-image">
//             <img src=${friend.img}>
//             <span class="card-title">Card Title</span>
//             <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//           </div>
//           <div class="card-content">
//             <p>Nombre: ${friend.name}.</p>
//           </div>
//         </div>

//     `;
//     holdFriend.appendChild(div);
//   }

// nameObjetos = friends.map(function (elem) {
//   let returnObjeto = { name: elem.name };
//   return returnObjeto;
// });

// console.log(nameObjetos);

// let nameUser = [];

// nameUser = nameObjetos.map(function (elem) {
//   let value = Object.values(elem);
//   return value;
// });

// let userName = [];
// for (const user of nameUser) {
//   userName.push("\n" + user);
// }

// userName = userName.join("");

// if (userName.includes("\n" + nameFriend)) {
//   confirm(`hemos encontrado estas coincidencias: ${userName.toString()}`);
// } else {
//   confirm(
//     `lo sentimos mucho pero tu amigo ${nameFriend.toString()} no se encuentre`
//   );
// }
// console.log(nameFriend);
// console.log(userName);
// };

// window.addEventListener("load", initSearchFriend, false);

// function initSearchFriend() {
//   let boton = document.querySelector(".searchFriend");
//   boton.addEventListener("click", findFriends, false);
// }

// function foundFriends() {
//   let cardFriend = document.createElement("div");
//   div.setAttribute("id", "foundFriends");
//   div.innerHTML += "Amigos encontrados";
//   for (const friend of nameUser) {
//     div.innerHTML += `<div class="row">
//     <div class="col s10 m4">
//       <div class="card">
//         <div class="card-image">
//           <img src="images/sample-1.jpg">
//           <span class="card-title">Card Title</span>
//           <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
//         </div>
//         <div class="card-content">
//           <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
//         </div>
//       </div>
//     </div>
//   </div>`;
//   }
// }
