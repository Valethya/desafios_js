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
//
