const addUser = () => {
  let submit = document.querySelector("#newUser");
  submit.addEventListener("submit", (e) => {
    debugger;
    e.preventDefault();
    let name = document.getElementById("first_name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password-confirm").value;
    let passwordEnd = "";
    let inputPassConfirm = document.querySelector("#password-confirm");
    if (
      password === confirmPassword &&
      password != "" &&
      confirmPassword != ""
    ) {
      passwordEnd = confirmPassword;
      let newUser = new user(name, email, passwordEnd);
      usuarios.push(newUser);
      alert("has sido registrado exitosamente");
      window.location.replace("index.html");
    } else if (password != confirmPassword) {
      addClass("#password-confirm", "invalid");
      addClass("#password", "invalid");
      if (email == "") {
        addClass("#email", "invalid");
      }

      if (name == "") {
        addClass("#first_name", "invalid");
      }
    }
  });
};

addUser();
