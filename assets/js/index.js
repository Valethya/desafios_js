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

// agregar o remover una clase

function addClass(element, theClass) {
  let ele = document.querySelector(element);
  ele.classList.add(theClass);
}
function removeClass(element, theClass) {
  let ele = document.querySelector(element);
  ele.classList.remove(theClass);
}

//mostrar u ocultar elementos
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

const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
