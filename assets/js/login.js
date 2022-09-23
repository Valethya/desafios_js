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

let recoveryLocalStorageUser = () => {
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
    lengthUsuarios = usuarios.length;
    usuarios.splice(0, lengthUsuarios);
    users.forEach((user) => {
      usuarios.push(user);
    });
  }
};
recoveryLocalStorageUser();

const login = () => {
  let form = document.querySelector("#login");
  form.addEventListener("submit", (e) => {
    debugger;
    e.preventDefault();
    let email = document.querySelector("#emailLogin").value.toLowerCase();
    let password = document.querySelector("#passwordLogin").value;
    let userLog = usuarios.find(
      (user) => user.email === email && user.password === password
    );
    if (userLog) {
      alert("has logrado acceder exitosamente");
      window.location.replace(userLog.page);
    } else {
      if (usuarios.find((user) => user.email === email)) {
        //valid email
        removeClass("#emailLogin", "invalid");
        addClass("#emailLogin", "valid");
        //invalid password
        removeClass("#passwordLogin", "valid");
        addClass("#passwordLogin", "invalid");
      } else {
        //invalid email
        removeClass("#emailLogin", "valid");
        addClass("#emailLogin", "invalid");
        //invalid passwor
        removeClass("#passwordLogin", "valid");
        addClass("#passwordLogin", "invalid");
      }
    }
  });
};

login();

const passwordRecovery = () => {
  debugger;
  let email = document.querySelector("#recoveryPass").value;
  let name = usuarios.find((user) => user.email === email);
  if (name) {
    alert(
      `${name.name} te hemos enviado un corre para recuperar tu contraseña`
    );
  } else {
    alert("este email no se encuentre registrado");
  }
};

debugger;
let listenerSpanPass = document.querySelector(".span-pass");
const addModalRevoceryPass = () => {
  debugger;
  let body = document.querySelector(".bg-login");
  let div = document.createElement("div");
  div.setAttribute("class", "recoveryPass z-depth-5");
  div.innerHTML = ` <div>
  <p>Porfavor ingresa tu email, para poder recuperar tu contraseña</p>
</div>
<form class="justify-center" id="recovery">
  <div class="row justify-center">
    <div class="input-field">
      <input id="recoveryPass" type="email" class="validate" />
      <label for="recoveryPass">Email</label>
      <span
        class="helper-text"
        data-error="correo no registrado"
        data-success="el corre se encuentra registrado"
      ></span>
    </div>
    <button
      class="btn waves-effect waves-light btn-form"
      type="submit"
      name="action"
    >
      Submit
    </button>
  </div>
</form>`;
  body.appendChild(div);
};
listenerShowHidden(".span-pass", ".card-login", "block");
listenerSpanPass.addEventListener("click", addModalRevoceryPass, false);

// document.querySelector("#recovery");
let recovery = document.querySelector(".bg-login");
recovery.addEventListener("submit", passwordRecovery);
