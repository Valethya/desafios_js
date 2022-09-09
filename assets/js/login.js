// let emailRecovery = usuarios.find((user) => user.email === email);
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
  let email = prompt("ingrese su email").toLowerCase();
  let password = prompt("ingrese su contraseña").toLowerCase();

  if (
    usuarios.find((user) => user.email === email && user.password === password)
  ) {
    confirm("has logrado acceder exitosamente");
  } else {
    alert("la contraseña no coincide o el email no se encuentra registrado");
    let confirmed = confirm("deseas recuperar tu contraseña?");
    if (confirmed === true) {
      passwordREcovery();
    }
  }
};

login();
