let tiendas = [
  {
    nombre: "ISUTECH",
    ubicacion: "Centro de Lima",
    categoria: "audifonos",
    imagen: "https://lh3.googleusercontent.com/d/1fjFzOJZb8e_4C78ntaGXt6fGAUdoCEtU"
  },
  {
    nombre: "IMPORTACIONES LIMIG",
    ubicacion: "Gamarra",
    categoria: "cargadores",
    imagen: "https://lh3.googleusercontent.com/d/149l7__xK83Qe-fn3Qanh-feI8rFyq2iu"
  },
  {
    nombre: "IMPORTACIONES ENRIQUEZ",
    ubicacion: "Centro de Lima",
    categoria: "parlantes",
    imagen: "https://lh3.googleusercontent.com/d/1cOQyjGACuericmtVY-msKImlNruSiiHv"
  },
  {
    nombre: "Importaciones JL",
    ubicacion: "Gamarra",
    categoria: "audifonos",
    imagen: "https://picsum.photos/400/400?13"
  },
  {
    nombre: "ElectroCentro",
    ubicacion: "Centro de Lima",
    categoria: "cargadores",
    imagen: "https://picsum.photos/400/400?14"
  }
];

let filtroCategoria = "todas";

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtroUbicacion = document.getElementById("filtroUbicacion");

function mostrarTiendas() {
  catalogo.innerHTML = "";

  let filtrados = tiendas.filter(t => {
    return (
      t.nombre.toLowerCase().includes(buscador.value.toLowerCase()) &&
      (filtroUbicacion.value === "todos" || t.ubicacion === filtroUbicacion.value) &&
      (filtroCategoria === "todas" || t.categoria === filtroCategoria)
    );
  });

  filtrados.forEach(t => {
    let div = document.createElement("div");
    div.classList.add("producto");

    div.innerHTML = `
      <img src="${t.imagen}">
      <h3>${t.nombre}</h3>
      <p>${t.ubicacion}</p>
      <div class="btn">Ver catálogo</div>
    `;

    div.onclick = () => abrirTienda(t);

    catalogo.appendChild(div);
  });
}

function filtrarCategoria(cat) {
  filtroCategoria = cat;
  mostrarTiendas();
}

buscador.addEventListener("input", mostrarTiendas);
filtroUbicacion.addEventListener("change", mostrarTiendas);

function abrirTienda(tienda) {
  let nuevaVentana = window.open("", "_blank");

  nuevaVentana.document.write(`
    <html>
    <head>
      <title>${tienda.nombre}</title>
      <style>
        body { font-family: Arial; margin:0; background:#f0f2f5;}
        .header { background:#ff8c00; color:white; padding:20px; text-align:center;}
        .catalogo { display:flex; overflow-x:auto; gap:20px; padding:20px;}
        .item { min-width:250px; background:white; padding:10px; border-radius:10px;}
        img { width:100%; height:150px; object-fit:cover;}
        .btn { background:green; color:white; padding:10px; text-align:center; border-radius:8px; margin-top:10px;}
      </style>
    </head>
    <body>

    <div class="header">
      <h2>${tienda.nombre}</h2>
      <p>${tienda.ubicacion}</p>
    </div>

    <div class="catalogo">
      ${crearProducto("Audífonos")}
      ${crearProducto("Cargadores")}
      ${crearProducto("Parlantes")}
    </div>

    </body>
    </html>
  `);
}

function crearProducto(nombre) {
  let mensaje = `Hola, quiero comprar ${nombre}`;
  let link = `https://wa.me/51947200144?text=${encodeURIComponent(mensaje)}`;

  return `
    <div class="item">
      <img src="https://picsum.photos/300/300?random=${Math.random()}">
      <h3>${nombre}</h3>
      <p>Medidas: estándar</p>
      <p>Precio: S/ 50</p>
      <p>Ubicación: Gamarra</p>
      <a class="btn" href="${link}" target="_blank">Solicitar compra</a>
    </div>
  `;
}

mostrarTiendas();
