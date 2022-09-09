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
