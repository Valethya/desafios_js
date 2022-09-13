const services = [];

class service {
  constructor(nombre, tipo, precio, disponibilidad, cupos, imgUrl) {
    this.name = nombre;
    this.type = tipo;
    this.price = precio;
    this.availability = disponibilidad;
    this.quotas = cupos;
    this.img = imgUrl;
  }
}

let service1 = new service(
  "planifica tu semana",
  "asesorias",
  "20000",
  "true",
  "20",
  "assets/img/planning-meal.jpg"
);

let service2 = new service(
  "sesiones de yoga",
  "clases",
  "2000",
  "false",
  "0",
  "assets/img/yoga.jpg"
);

let service3 = new service(
  "nutricion en familia",
  "cursos",
  "30000",
  "true",
  "30",
  "assets/img/family.jpg"
);

let service4 = new service("hola", "asesorias", "10000", "false", "0");

let service5 = new service("otro curso", "cursos", "15000", "true", "25");

let service6 = new service(
  "asesorias por aqui",
  "asesorias",
  "25000",
  "true",
  "10"
);

debugger;
const serviceArr = () => {
  services.push(service1, service2, service3, service4, service5, service6);
};
serviceArr();
const formatPrice = (price) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);
};

const orderPrice = (arr, option) => {
  arr.sort((a, b) => {
    if (option == "menorMayor") {
      if (a.price < b.price) return -1;
      if (a.price > b.price) return 1;
      return 0;
    }
    if (option == "mayorMenor") {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    }
  });
};

const loadService = (services) => {
  let holdService = document.querySelector(".holdServiceCard");
  let serviceHtml = document.querySelector(".service");
  if (serviceHtml) {
    holdService.innerHTML = "";
  }
  for (const service of services) {
    let div = document.createElement("div");
    div.setAttribute("class", " service col s10 m4");
    div.innerHTML = `
  
    <div class="card hoverable">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator responsive-img"
          src=${service.img}
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4"
          >${service.name}<i class="material-icons right"
            >more_vert</i
          ></span
        >
        <p><a href="#">${formatPrice(service.price)}</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4"
          >${service.name}<i class="material-icons right"
            >close</i
          ></span
        >
        <p>
          Here is some more information about this product that is only
          revealed once clicked on.
        </p>
      </div>
    </div>
        `;
    if (serviceHtml) {
    }
    holdService.appendChild(div);
  }
};
loadService(services);

debugger;
// let findService = () => {
//   let serviceType = prompt(
//     "que servicio buscas? \n1-.nutricional.\n2-.asesoria.\n3-.cursos.\n4-.clases.\n 5-.Todas."
//   ).toLowerCase();
//   debugger;

//   if (serviceType == "todas") {
//     loadService(services);
//   } else {
//     let foundService = services.filter(
//       (service) => service.type === serviceType
//     );
//     loadService(foundService);
//   }
// };
// debugger;

// window.addEventListener("load", findService);

const selectOption = document.querySelector(".typeService");

selectOption.addEventListener("change", () => {
  debugger;
  let option = document.querySelector(".typeService").value;
  if (option == "todos") {
    loadService(services);
  } else {
    let foundService = services.filter((service) => service.type === option);

    loadService(foundService);
  }
});
debugger;

//ordenar productos
// debugger;
// let btnHigher = document.querySelector("#mayorMenor");
// let btnLower = document.querySelector("#menorMayor");

// const higherPrice = (services) => {
//   let serviceHigher = services.sort((a, b) => {
//     if (a.price > b.price) {
//       return -1;
//     }
//     if (a.price < b.price) {
//       return 1;
//     }
//     return 0;
//   });
//   loadService(serviceHigher);
// };

// const lowerPrice = (services) => {
//   let servicesLower = services.sort((a, b) => {
//     if (a.price > b.price) {
//       return 1;
//     }
//     if (a.price < b.price) {
//       return -1;
//     }
//     return 0;
//   });
//   loadService(servicesLower);
// };

// debugger;
// // btnHigher.addEventListener("click", higherPrice(services), false);
// // btnLower.addEventListener("click", lowerPrice(services), false);
// if (Option.value === "menorMayor") {
//   if (a.price < b.price) return -1;
//   if (a.price > b.price) return 1;
//   return 0;
// }

// if (Option.value === "mayorMenor") {
//   if (a.price > b.price) return -1;
//   if (a.price < b.price) return 1;
//   return 0;
// }
