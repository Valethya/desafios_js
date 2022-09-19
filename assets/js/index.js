document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems, {});
});

document.addEventListener("DOMContentLoaded", function () {
  var fab = document.querySelectorAll(".fixed-action-btn");
  var instances = M.FloatingActionButton.init(fab, {});
});

document.addEventListener("DOMContentLoaded", function () {
  var drop = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(drop);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll("select");
  M.FormSelect.init(elems, {});
});

///////mi codigo///

const usuarios = [];

class user {
  constructor(name, email, password, urlimg) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.img = urlimg;
  }
}

let user1 = new user("her", "hernan", "12345", "assets/img/her.jpg");

let user2 = new user("max", "maxi", "1542", "assets/img/maxi.jpg");

let user3 = new user("maximo", "maximi", "1592", "assets/img/maximo.jpg");

let user4 = new user("vale", "valentina", "1672", "assets/img/vale.jpg");

usuarios.push(user1, user2, user3, user4);

const getInputValue = (id) => {
  document.getElementById(id).value;
};

//show or hidden the login o sign div

function listenerShowHidden(selector, element, display) {
  let boton = document.querySelector(selector);
  boton.addEventListener("click", () => {
    showHidden(element, display);
  });
}
const showHidden = (element, display) => {
  let div = document.querySelector(element);
  if (div.style.display === "none") {
    div.style.display = display;
  } else {
    div.style.display = "none";
  }
};

listenerShowHidden(".sign", ".card-sign");

listenerShowHidden(".login", ".card-login");

///addUser ask for name, email and password to creat the user

const addUser = () => {
  let submite = document.querySelector("#newUser");

  submite.addEventListener("click", () => {
    let name = document.getElementById("first_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password-confirm").value;
    let passwordEnd = "";

    do {
      if (password === confirmPassword) {
        passwordEnd = confirmPassword;
      } else {
        alert("la contraseña debe coincidir");
      }
    } while (password != confirmPassword);

    let newUser = new user(name, email, passwordEnd);

    usuarios.push(newUser);
  });
};
addUser();

//login
//passwordRecovery ask a user email and find matches to return a response
const passwordREcovery = () => {
  let email = prompt("ingresa tu email por favor").toLowerCase();
  if (usuarios.find((user) => user.email === email)) {
    let name = usuarios.find((user) => user.email === email).name;
    confirm(
      name + " te hemos enviado un email para reestablecer tu contraseña"
    );
  } else {
    alert("este email no se encuentra registrado");
  }
};

const login = () => {
  let boton = document.querySelector(".login");
  boton.addEventListener("click", () => {
    let email = prompt("ingrese su email").toLowerCase();
    let password = prompt("ingrese su contraseña").toLowerCase();

    if (
      usuarios.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      confirm("has logrado acceder exitosamente");
    } else {
      alert("la contraseña no coincide o el email no se encuentra registrado");
      let confirmed = confirm("deseas recuperar tu contraseña?");
      if (confirmed === true) {
        passwordREcovery();
      }
    }
  });
};
login();

//holdFriend show a div whit a browser

const holdFriend = () => {
  let boton = document.querySelector(".searchFriend");
  boton.addEventListener("click", () => {
    let father = document.body;
    let holdFriend = document.querySelector(".holdFriend");

    let div = document.createElement("div");
    div.setAttribute("class", "holdFriend main container center-align");
    div.innerHTML = `<div class="nav-wrapper">
    <form>
      <div class="input-field">
        <input id="searchFriends" type="search" placeholder="Busca a tus amigos" required>
        <label class="label-icon" for="search"><i class="material-icons teal-text">search</i></label>
        <i class="material-icons">close</i>
      </div>
    </form>
  </div><div class="cardFriend row">`;

    if (!holdFriend) {
      father.appendChild(div);
    }
  });
};

holdFriend();

//findFriend find a friends and show all matches below the browser

const findFriends = () => {
  let boton = document.querySelector(".searchFriend");
  boton.addEventListener("click", () => {
    let nameFriend = prompt("como se llama la persona que buscas?");
    let friends = usuarios.filter((user) => user.name.match(nameFriend));

    let divFriend = document.querySelector(".Friend");
    let cardFriend = document.querySelector(".cardFriend");
    if (cardFriend) {
      cardFriend.innerHTML = "";
    }

    for (const friend of friends) {
      let div = document.createElement("div");
      div.setAttribute("class", " friend col s10 m4");
      div.innerHTML = `
      
              <div class="card">
                <div class="card-image">
                  <img src=${friend.img}>
                  <span class="card-title">Card Title</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>Nombre: ${friend.name}.</p>
                </div>
              </div>
        
          `;
      cardFriend.appendChild(div);
    }
  });
};

findFriends();
