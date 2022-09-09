const services = [];

class service {
  constructor(nombre, tipo, precio, disponibilidad, cupos) {
    this.name = nombre;
    this.type = tipo;
    this.price = precio;
    this.availability = disponibilidad;
    this.quotas = cupos;
  }
}

let service1 = new service(
  "planifica tu semana",
  "asesoria",
  "20000",
  "true",
  "20"
);

let service2 = new service("sesiones de yoga", "clases", "2000", "false", "0");

let service3 = new service(
  "nutricion en familia",
  "cursos",
  "30000",
  "true",
  "30"
);

let service4 = new service("hola", "asesoria", "10000", "false", "0");

let service5 = new service("otro curso", "cursos", "15000", "true", "25");

let service6 = new service(
  "asesorias por aqui",
  "asesoria",
  "25000",
  "true",
  "10"
);

services.push(service1, service2, service3, service4, service5, service6);

let findService = () => {
  let serviceType = prompt(
    "que servicio buscas? \n1-.nutricional.\n2-.asesoria.\n3-.cursos.\n4-.clases."
  ).toLowerCase();

  let foundService = services.filter((service) => service.type === serviceType);
};
debugger;
findService();
