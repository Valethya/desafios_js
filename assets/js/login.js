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
  let form = document.querySelector("#login");
  form.addEventListener("submit", (e) => {
    debugger;
    e.preventDefault();
    let email = document.querySelector("#emailLogin").value.toLowerCase();
    let password = document.querySelector("#passwordLogin").value;
    if (
      usuarios.find(
        (user) => user.email === email && user.password === password
      )
    ) {
      alert("has logrado acceder exitosamente");
      window.location.replace("index.html");
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
