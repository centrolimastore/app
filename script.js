let productos = [
  {
    nombre: "Polo Negro",
    precio: 25,
    categoria: "ropa",
    ubicacion: "Gamarra",
    proveedor: "Gamarra Store",
    imagen: "https://picsum.photos/400/400?1",
    etiqueta: "Polo Negro"
  },
  {
    nombre: "Gorra Urbana",
    precio: 18,
    categoria: "gorras",
    ubicacion: "Gamarra",
    proveedor: "Gamarra Caps",
    imagen: "https://picsum.photos/400/400?2",
    etiqueta: "Gorra Urbana"
  },
  {
    nombre: "Pantalón Jeans",
    precio: 60,
    categoria: "pantalones",
    ubicacion: "Gamarra",
    proveedor: "Jeans Perú",
    imagen: "https://picsum.photos/400/400?3",
    etiqueta: "Jean"
  },
  {
    nombre: "Audífonos Bluetooth",
    precio: 45,
    categoria: "audifonos",
    ubicacion: "Centro de Lima",
    proveedor: "Tech Centro",
    imagen: "https://picsum.photos/400/400?4",
    etiqueta: "Audífonos"
  },
  {
    nombre: "Cargador iPhone",
    precio: 20,
    categoria: "cargadores",
    ubicacion: "Centro de Lima",
    proveedor: "Electro Lima",
    imagen: "https://picsum.photos/400/400?5",
    etiqueta: "Cargador Iphone"
  }
];

let filtroCategoria = "todas";

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtroUbicacion = document.getElementById("filtroUbicacion");

function mostrarProductos() {
  catalogo.innerHTML = "";

  let filtrados = productos.filter(p => {
    return (
      p.nombre.toLowerCase().includes(buscador.value.toLowerCase()) &&
      (filtroUbicacion.value === "todos" || p.ubicacion === filtroUbicacion.value) &&
      (filtroCategoria === "todas" || p.categoria === filtroCategoria)
    );
  });

  filtrados.forEach(p => {
    let mensaje = `¡Hola!, quiero el ${p.nombre} de S/ ${p.precio}`;
    let link = `https://wa.me/51947200144?text=${encodeURIComponent(mensaje)}`;

    let div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <span class="etiqueta">${p.etiqueta}</span>
      <img src="${p.imagen}">
      <h3>${p.nombre}</h3>
      <p>S/ ${p.precio}</p>
      <a class="btn" href="${link}" target="_blank">Comprar</a>
    `;

    div.addEventListener("click", (e) => {
      if (!e.target.classList.contains("btn")) {
        verDetalle(p);
      }
    });

    catalogo.appendChild(div);
  });
}

function filtrarCategoria(cat) {
  filtroCategoria = cat;
  mostrarProductos();
}

buscador.addEventListener("input", mostrarProductos);
filtroUbicacion.addEventListener("change", mostrarProductos);

function verDetalle(p) {
  let mensaje = `Hola, quiero el ${p.nombre} de S/ ${p.precio}`;
  let link = `https://wa.me/51947200144?text=${encodeURIComponent(mensaje)}`;

  document.getElementById("detalleProducto").innerHTML = `
    <img src="${p.imagen}" style="width:100%; border-radius:10px;">
    <h2>${p.nombre}</h2>
    <p><strong>Precio:</strong> S/ ${p.precio}</p>
    <p><strong>Proveedor:</strong> ${p.proveedor}</p>
    <p><strong>Ubicación:</strong> ${p.ubicacion}</p>
    <a class="btn" href="${link}" target="_blank">Comprar por WhatsApp</a>
    <br><br>
  `;

  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

mostrarProductos();