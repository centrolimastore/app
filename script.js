let filtroCategoria = "Todas";

let galerias = [
  {
    nombre: "Galería El Dorado",
    direccion: "Jirón Andahuaylas 1024",
    imagen: "Galeria/eldorado.jpg",
    tiendas: [
      {
        nombre: "ISUTECH",
        ubicacion: "Centro de Lima",
        imagen: "https://lh3.googleusercontent.com/d/1fjFzOJZb8e_4C78ntaGXt6fGAUdoCEtU",
        productos: [
          { nombre: "Cargador", precio: 25 },
          { nombre: "Audífonos", precio: 60 }
        ]
      },
      {
        nombre: "IMPORTACIONES LIMIG",
        ubicacion: "Centro de Lima",
        imagen: "https://lh3.googleusercontent.com/d/149l7__xK83Qe-fn3Qanh-feI8rFyq2iu",
        productos: [
          { nombre: "Pilas", precio: 12 },
          { nombre: "Memoria RAM", precio: 140 },
          { nombre: "Catiteja", precio: 8 }
        ]
      },
      {
        nombre: "COMERCIAL MATHIAS",
        ubicacion: "Centro de Lima",
        imagen: "https://lh3.googleusercontent.com/d/1CW9qVToSXg4cVjLZaJoponjSoPmdsbyD",
        productos: [
          { nombre: "Cargador iPhone", precio: 35 },
          { nombre: "Audífonos Gamer", precio: 90 }
        ]
      }
    ]
  },
  {
    nombre: "Galería César",
    direccion: "Jirón Andahuaylas 1060",
    imagen: "Galeria/cesar.jpg",
    tiendas: [
      {
        nombre: "IMPORTACIONES ENRIQUEZ",
        ubicacion: "Centro de Lima",
        imagen: "https://lh3.googleusercontent.com/d/1cOQyjGACuericmtVY-msKImlNruSiiHv",
        productos: [
          { nombre: "Airpods Pro 2da Generación GENERIC", precio: 50, imagen: "Enriquez/airpodspro2dageneracion.jpg" },
          { nombre: "Airpods Pro 3era Generación GENERIC", precio: 70, imagen: "Enriquez/airpodspro3erageneracion.jpg" },
          { nombre: "Airpods Pro 2da Generación con ANC GENERIC", precio: 60, imagen: "Enriquez/airpodspro2dageneracionconanc.jpg" },
          { nombre: "Airpods Pro 4ta Generación con ANC GENERIC", precio: 65, imagen: "Enriquez/airpodspro4tageneracionconanc.jpg" },
          { nombre: "Airpods Pro 4 Original sin ANC GENERIC", precio: 60, imagen: "Enriquez/airpodspro4originalsinanc.jpg" },
          { nombre: "Cargador Iphone 15 Pro Max 20W GENERIC", precio: 25, imagen: "Enriquez/cargadoriphone15promax20w.jpg" },
          { nombre: "Cargador Iphone 14 Pro Max 20W GENERIC", precio: 25, imagen: "Enriquez/cargadoriphone14promax20w.jpg" },
          { nombre: "Cargador Iphone 16 Pro Max GENERIC", precio: 25, imagen: "Enriquez/cargadoriphone16promax.jpg" },
          { nombre: "Dado Iphone 20W GENERIC", precio: 20, imagen: "Enriquez/dadoiphone20w.jpg" },
          { nombre: "Dado Iphone 40W GENERIC", precio: 30, imagen: "Enriquez/dadoiphone40w.jpg" },
          { nombre: "Cable Iphone C A C - 2 metros GENERIC", precio: 20, imagen: "Enriquez/cableiphonecac2metros.jpg" },
          { nombre: "Cable Iphone Lightning a USB GENERIC", precio: 15, imagen: "Enriquez/cableiphonelightningausb.jpg" },
          { nombre: "Cable Iphone C A Lightning GENERIC", precio: 16, imagen: "Enriquez/cableiphonecalightning.jpg" },
          { nombre: "Audífono Iphone Conexión directa GENERIC", precio: 30, imagen: "Enriquez/audifonoiphoneconexiondirecta.jpg" },
          { nombre: "Audífono Iphone Conexión Bluetooth GENERIC", precio: 20, imagen: "Enriquez/audifonoiphoneconexionblutu.jpg" },
          { nombre: "Airpods Max con logo GENERIC", precio: 60, imagen: "Enriquez/airpodsmaxconlogo.jpg" },
          { nombre: "Audífono P9 Plus Max  GENERIC", precio: 22, imagen: "Enriquez/audifonop9plusmax.jpg" },
          { nombre: "Audífono P9 GENERIC", precio: 20, imagen: "Enriquez/audifonop9.jpg" },
          { nombre: "Audífono Iphone TC GENERIC", precio: 20, imagen: "Enriquez/audifonoiphonetc.jpg" },
          { nombre: "Batería Iphone 10,000 AHM GENERIC", precio: 35, imagen: "Enriquez/bateria10000.jpg" },
          { nombre: "Batería Iphone 5,000 AHM GENERIC", precio: 30, imagen: "Enriquez/bateria5000.jpg" },
          { nombre: "Magsafe Carga Inalámbrico", precio: 30, imagen: "Enriquez/magsafecargainalambrico.jpg" },
          { nombre: "Lightning to USB - 2 metros", precio: 18, imagen: "Enriquez/lightningtousb2metros.jpg" },
          { nombre: "Batería Iphone 20,000 AHM GENERIC", precio: 40, imagen: "Enriquez/bateria20000.jpg" },
          { nombre: "Airpods Max Imantado GENERIC", precio: 75, imagen: "Enriquez/airpodsmaximantado.jpg" },
          { nombre: "Cable Iphone C.C 1M GENERIC", precio: 18, imagen: "Enriquez/cableiphonecc1m.jpg" },
          { nombre: "Cable Iphone C.C 2M GENERIC", precio: 18, imagen: "Enriquez/cableiphonecc2m.jpg" },
          { nombre: "Case Cargador", precio: 23, imagen: "Enriquez/casecargador.jpg" },
          { nombre: "Case Pro2", precio: 18, imagen: "Enriquez/casepro2.jpg" },
          { nombre: "Case Pro 4 con diseño", precio: 22, imagen: "Enriquez/casepro4condiseño.jpg" },
          { nombre: "Case Pro 2 con diseño", precio: 22, imagen: "Enriquez/casepro2condiseño.jpg" },
          { nombre: "Case Pro 2 y Pro 4", precio: 14.5, imagen: "Enriquez/casepro2ypro4.jpg" },
          { nombre: "Case para Airpods Pro 3", precio: 18, imagen: "Enriquez/caseparaairpodspro3.jpg" },
          { nombre: "Case Pro 3 con diseño", precio: 22, imagen: "Enriquez/casepro3condiseño.jpg" }
        ]
      },
      {
        nombre: "SUMAQ IMPORT",
        ubicacion: "Centro de Lima",
        imagen: "https://lh3.googleusercontent.com/d/1KKc32ngy9zHbw0Khqfa8NcXzlUe1aHyI",
        productos: [
          { nombre: "Vasos", precio: 15 },
          { nombre: "Platos", precio: 35 }
        ]
      },
      {
        nombre: "IMPORTACIONES AROTOMA",
        ubicacion: "Centro de Lima",
        imagen: "https://lh3.googleusercontent.com/d/1y1PFSiNOuLpENskRhjgoqvx7-EasViMt",
        productos: [
          { nombre: "Airpods Pro 2 sin ANC GENERIC", precio: 48, imagen: "Arotoma/airpods2dageneracion.jpg" },
          { nombre: "Airpods Pro 2 con ANC GENERIC", precio: 60, imagen: "Arotoma/airpodspro2.jpg" },
	  { nombre: "Airpods Pro 3 sin ANC GENERIC", precio: 43, imagen: "Arotoma/airpodspro3.jpg" },
          { nombre: "Airpods Pro 4 ANC GENERIC", precio: 58, imagen: "Arotoma/airpodspro4.jpg" },
	  { nombre: "Cargador 15 Pro Max 20W C a C GENERIC", precio: 15, imagen: "Arotoma/cargador15promax20wcac.jpg" },
          { nombre: "Cargador 14 Pro Max 20W GENERIC", precio: 15, imagen: "Arotoma/cargador14promax20w.jpg" },
	  { nombre: "Cargador 15 Pro Max C a C GENERIC", precio: 15, imagen: "Arotoma/cargador15promaxcac.jpg" },
          { nombre: "Cubo 20 W GENERIC", precio: 12, imagen: "Arotoma/cubo20w.jpg" },
	  { nombre: "Cubo 35W GENERIC", precio: 18, imagen: "Arotoma/cubo35w.jpg" },
          { nombre: "Cable C a C de 2M GENERIC", precio: 10, imagen: "Arotoma/cablecacde2m.jpg" },
	  { nombre: "Cable USB Iphone GENERIC", precio: 5, imagen: "Arotoma/cableusbiphone.jpg" },
          { nombre: "Cable C Iphone GENERIC", precio: 6, imagen: "Arotoma/cableciphone.jpg" },
	  { nombre: "Audífono Conexión Directa GENERIC", precio: 24, imagen: "Arotoma/audifonoconexiondirecta.jpg" },
          { nombre: "Audífono Conexión Bluetooth GENERIC", precio: 12, imagen: "Arotoma/audifonoconexionblutu.jpg" },
	  { nombre: "Airpods Max con logo GENERIC", precio: 48, imagen: "Arotoma/airpodsmaxconlogo.jpg" },
          { nombre: "Audífonos P9 Plus Max GENERIC", precio: 15, imagen: "Arotoma/audifonosp9plusmax.jpg" },
	  { nombre: "Audífono P9 Colores GENERIC", precio: 12, imagen: "Arotoma/audifonop9colores.jpg" },
          { nombre: "Audífono Entrada TC", precio: 10, imagen: "Arotoma/audifonoentradatc.jpg" },
	  { nombre: "Battery Pack 10,000 MAH", precio: 36, imagen: "Arotoma/batterypack10000mah.jpg" },
          { nombre: "Battery Pack 5000 MAH", precio: 26, imagen: "Arotoma/batterypack5000mah.jpg" },
	  { nombre: "Magsafe Carga Inalámbrico GENERIC", precio: 20, imagen: "Arotoma/magsafecargainalambrico.jpg" },
          { nombre: "Cargador Inalámbrico 3 in 1 GENERIC", precio: 90, imagen: "Arotoma/cargadorinalambrico3en1.jpg" },
	  { nombre: "Cargador 25W GENERIC", precio: 15, imagen: "Arotoma/cargador25wcargarapida.jpg" },
          { nombre: "Cubo 25W Carga Rápida GENERIC", precio: 12, imagen: "Arotoma/cubo25wcargarapida.jpg" },
	  { nombre: "Cargador 45W USB - C GENERIC", precio: 16, imagen: "Arotoma/cargador45wusbccargarapida.jpg" },
          { nombre: "Cubo 45W USB - C GENERIC", precio: 14, imagen: "Arotoma/cubo45wusbccargarapida.jpg" },
	  { nombre: "Cargador 100W - S23", precio: 25, imagen: "Arotoma/cargador100ws23cargarapida.jpg" },
          { nombre: "Cargador 65W Trio", precio: 25, imagen: "Arotoma/cargador65wtrio.jpg" },
	  { nombre: "Cargador Once 120W - Turbo con segundero", precio: 20, imagen: "Arotoma/cargadoronce120wturboconsegundero.jpg" },
          { nombre: "Cargador 120w - Turbo con segundero", precio: 20, imagen: "Arotoma/cargador120wturboconsegundero.jpg" },
	  { nombre: "Cargador Carga Rápida TC y V8", precio: 9, imagen: "Arotoma/cargadorcargarapidatcyv8.jpg" },
          { nombre: "Cargador V8", precio: 8, imagen: "Arotoma/cargadorv8.jpg" },
	  { nombre: "Cargador V8", precio: 5.50, imagen: "Arotoma/cargadorv8travelcharguer.jpg" },
          { nombre: "Cargador 3.8 a TC", precio: 6, imagen: "Arotoma/cargador38atc.jpg" },
	  { nombre: "Cargador 3.1 A", precio: 4, imagen: "Arotoma/cargador31a.jpg" },
          { nombre: "Cargador Carga Rápida 6.2 a TC y V8", precio: 13, imagen: "Arotoma/cargadorcargarapida62atcyv8.jpg" },
	  { nombre: "Cargador 6.0 a TC y V8", precio: 12, imagen: "Arotoma/cargador60atcyv8.jpg" },
          { nombre: "Cargador 5.5 a TC y V8 Doble Salida", precio: 14, imagen: "Arotoma/cargador55atcyv8doblesalida.jpg" },
	  { nombre: "Cargador VEX Carga Rápida TC y V8", precio: 10, imagen: "Arotoma/cargadorvexcargarapidatcyv8.jpg" },
          { nombre: "Cargador DW Carga Rápida TC", precio: 10, imagen: "Arotoma/cargadordwcargarapidatc.jpg" },
	  { nombre: "Cargador DW Carga Rápida  V8", precio: 9, imagen: "Arotoma/cargadordwcargarapidav8.jpg" },
          { nombre: "Cargador Original TC y V8", precio: 5.50, imagen: "Arotoma/cargadororiginaltcyv8.jpg" },
	  { nombre: "Cargador Xiomi 120W con segundero", precio: 25, imagen: "Arotoma/cargadorxiomi120wconsegundero.jpg" },
          { nombre: "Cargador MI 3W", precio: 15, imagen: "Arotoma/cargadormi33w.jpg" },
	  { nombre: "Cargador MI 55W", precio: 16, imagen: "Arotoma/cargadormi55w.jpg" }
        ]
      }
    ]
  },
  {
    nombre: "Galería La Carreta",
    direccion: "Jirón Mesa Redonda 998",
    imagen: "Galeria/lacarreta.jpg",
    tiendas: [
      {
        nombre: "INVERSIONES ÁLVAREZ",
        ubicacion: "Gamarra",
        imagen: "https://lh3.googleusercontent.com/d/1x2IxshlMXlSO2k6vExTwSsTlMCkmzHa4",
        productos: [
          { nombre: "Iphone", precio: 1200 },
          { nombre: "Samsung", precio: 1100 }
        ]
      },
      {
        nombre: "MOVILTRONICS",
        ubicacion: "Gamarra",
        imagen: "https://lh3.googleusercontent.com/d/1dhLLPCpSz_thw_oA58ELFx3ZoZPpjEck",
        productos: [
          { nombre: "Mouse Dual", precio: 30, imagen: "DM/mousedual.jpg" },
          { nombre: "Mouse Gamer", precio: 35, imagen: "DM/mousegamer.jpg" },
          { nombre: "Cable Fast Charging", precio: 40, imagen: "DM/cablefastcharging.jpg" },
          { nombre: "Altavoces para PC", precio: 120, imagen: "DM/altavocesparapc.jpg" },
          { nombre: "Pad Mouse Gel Antideslizante", precio: 50, imagen: "DM/padmousegelantideslizante.jpg" },
          { nombre: "Mouse Inalámbrico a Pilas", precio: 45, imagen: "DM/mouseinalambricoapilas.jpg" },
          { nombre: "Cargador 9V/2A 2 puntas", precio: 25, imagen: "DM/cargador9v2a.jpg" },
          { nombre: "Teclado & Mouse RGB", precio: 70, imagen: "DM/teclado&mousergb.jpg" },
          { nombre: "Parlante & Micrófono Inalámbrico", precio: 190, imagen: "DM/parlanteymicrofonoinalambrico.jpg" },
          { nombre: "Cargador de Tablet Modem 9V/2A", precio: 55, imagen: "DM/cargadordetabletmodem9v2a.jpg" },
          { nombre: "Mouse Ergonómico Inalámbrico", precio: 40, imagen: "DM/mouseergonomicoinalambrico.jpg" },
          { nombre: "Set Teclado & Mouse Inalámbrico", precio: 180, imagen: "DM/setteclado&mouseinalambrico.jpg" },
          { nombre: "Teclado con cable USB", precio: 155, imagen: "DM/tecladoconcableusb.jpg" },
          { nombre: "Audífonos", precio: 20, imagen: "DM/audifonosdm.jpg" },
          { nombre: "Parlante Porta Celular", precio: 55, imagen: "DM/parlanteportacelular.jpg" },
          { nombre: "Parante de Celular", precio: 12.5, imagen: "DM/parantedecelular.jpg" },
          { nombre: "Cargador 6.2 A Iphone", precio: 14, imagen: "DM/cargador6.2aiphone.jpg" },
          { nombre: "Adaptador Mini", precio: 10, imagen: "DM/adaptadormini.jpg" },
          { nombre: "USB Micro", precio: 10, imagen: "DM/usbmicro.jpg" },
          { nombre: "Car Charger Metal", precio: 14, imagen: "DM/carchargermetal.jpg" },
          { nombre: "Cargador Portatil 120W", precio: 60, imagen: "DM/cargadorportatil120w.jpg" },
          { nombre: "Cargador Tipo C 4.8A", precio: 14, imagen: "DM/cargadortipoc4.8a.jpg" },
          { nombre: "Cargador Tipo C 7.2A", precio: 16, imagen: "DM/cargadortipoc7.2a.jpg" },
          { nombre: "Altavoz 20W", precio: 75, imagen: "DM/altavoz20w.jpg" },
          { nombre: "Cargador de Auto Súper Carga", precio: 35, imagen: "DM/cargadordeautosupercarga.jpg" },
          { nombre: "Cargador Solo 6.5A", precio: 9, imagen: "DM/cargadorsolo6.5a.jpg" },
          { nombre: "Altavoz Bluethooth", precio: 85, imagen: "DM/altavozblutu.jpg" },
          { nombre: "Audífonos Inalámbricos", precio: 20, imagen: "DM/audifonosinalambricosdm.jpg" }
	]
      }
    ]
  },
  {
    nombre: "Galería Gran Mesa",
    direccion: "Jirón Andahuaylas N. 1049",
    imagen: "Galeria/lagranmesa.jpg",
    tiendas: [
      {
        nombre: "LANDES",
        ubicacion: "Gamarra",
        imagen: "https://lh3.googleusercontent.com/d/1G_4xEseHebUT1TZuV92pkS1o4U-Ro6uU",
        productos: [
          { nombre: "Lonchera Huntr/x", precio: 15, imagen: "LANDES/loncherahuntrax.jpeg" },
          { nombre: "Lonchera Hello Kity", precio: 15, imagen: "LANDES/loncherahellokity.jpeg" },
	  { nombre: "Lonchera North Face Marrón R", precio: 30, imagen: "LANDES/loncheranorthfacemarron.jpeg" },
          { nombre: "Lonchera North Face Azul R", precio: 30, imagen: "LANDES/loncheranorthfaceazul.jpeg" },
	  { nombre: "Lonchera UrbanSport Azul", precio: 28, imagen: "LANDES/loncheraurbansportazul.jpeg" },
          { nombre: "Lonchera UrbanSport Morada", precio: 28, imagen: "LANDES/loncheraurbansportmorada.jpeg" },
          { nombre: "Mochila CAT Verde R", precio: 29, imagen: "LANDES/mochilacatverde.jpeg" },
	  { nombre: "Mochila Porta Morada", precio: 29, imagen: "LANDES/mochilaportamorada.jpeg" },
          { nombre: "Mochila CAT Negra", precio: 29, imagen: "LANDES/mochilacatnegra.jpeg" },
	  { nombre: "Mochila SET Huntr/x", precio: 57, imagen: "LANDES/mochilasethuntrax.jpeg" },
          { nombre: "Canguro Calvin Klein Negro R", precio: 22, imagen: "LANDES/cangurocalvinkleinnegro.jpeg" },
	  { nombre: "Morral CAT Verde R", precio: 14, imagen: "LANDES/morralcatverde.jpeg" },
          { nombre: "Morral ADIDAS Verde R", precio: 14, imagen: "LANDES/morraladidasverde.jpeg" },
	  { nombre: "Morral NIKE Guinda R", precio: 14, imagen: "LANDES/morralnikeguinda.jpeg" },
          { nombre: "Morral PUMA Negro R", precio: 14, imagen: "LANDES/morralpumanegro.jpeg" },
	  { nombre: "Canguro CAT Negro R", precio: 20, imagen: "LANDES/cangurocatnegro.jpeg" },
          { nombre: "Canguro CAT Gris R", precio: 20, imagen: "LANDES/cangurocatgris.jpeg" },
	  { nombre: "Bolso Marrón Acolchado", precio: 19, imagen: "LANDES/bolsomarronacolchado.jpeg" },
          { nombre: "Bolso Negro Acolchado", precio: 19, imagen: "LANDES/bolsonegroacolchado.jpeg" },
	  { nombre: "Bolso Morado Acolchado", precio: 1, imagen: "LANDES/bolsomoradoacolchado.jpeg" },
          { nombre: "Bolso Beige Acolchado", precio: 19, imagen: "LANDES/bolsobeigeacolchado.jpeg" },
	  { nombre: "Morral Cruzado ADIDAS", precio: 16, imagen: "LANDES/morralcruzadoadidas.jpeg" },
          { nombre: "Morral Cruzado CAT", precio: 16, imagen: "LANDES/morralcruzadocat.jpeg" },
	  { nombre: "Morral Cruzado Rosado", precio: 16, imagen: "LANDES/morralcruzadorosado.jpeg" },
          { nombre: "Morral Cruzado Azul", precio: 16, imagen: "LANDES/morralcruzadoazul.jpeg" }
        ]
      }
    ]
  }
];

const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const filtroUbicacion = document.getElementById("filtroUbicacion");

function crearVolver(fn) {
  let btn = document.createElement("div");
  btn.className = "volver";
  btn.innerHTML = "Volver";
  btn.onclick = fn;
  catalogo.appendChild(btn);
}

/* ---------------- GALERÍAS + BUSCADOR ---------------- */
function mostrarGalerias() {
  catalogo.innerHTML = "";

  let texto = buscador.value.toLowerCase();

  if (texto !== "") {
    crearVolver(mostrarGalerias);

    galerias.forEach(galeria => {
      galeria.tiendas.forEach(tienda => {
        tienda.productos
          .filter(p =>
            p.nombre.toLowerCase().includes(texto)
          )
          .forEach(producto => {
            let div = document.createElement("div");
            div.className = "producto";

            div.innerHTML = `
              <img src="${producto.imagen || 'https://picsum.photos/300/300'}">
              <h3>${producto.nombre}</h3>
              <p>${tienda.nombre}</p>
              <p>${tienda.ubicacion}</p>
              <p>Precio: S/ ${producto.precio}</p>
              <input type="number" min="1" value="1">
              <div class="btn">Solicitar pedido</div>
            `;

            let input = div.querySelector("input");
            let btn = div.querySelector(".btn");

            btn.onclick = (e) => {
              e.stopPropagation();

              let cant = parseInt(input.value);
              let total = cant * producto.precio;

              let msg = `Hola, vengo de Centro de Lima Store, quiero pedir ${cant} ${producto.nombre} de la tienda ${tienda.nombre} por un total de S/ ${total}`;

              let url =
                "https://wa.me/51947200144?text=" +
                encodeURIComponent(msg);

              window.open(url, "_blank");
            };

            catalogo.appendChild(div);
          });
      });
    });

    return;
  }

  galerias.forEach(g => {
    let div = document.createElement("div");
    div.className = "producto";

    div.innerHTML = `
      <img src="${g.imagen}">
      <h3>${g.nombre}</h3>
      <p>${g.direccion}</p>
      <div class="btn">Ver tiendas</div>
    `;

    div.onclick = () => mostrarTiendas(g);
    catalogo.appendChild(div);
  });
}

/* ---------------- TIENDAS ---------------- */
function mostrarTiendas(galeria) {
  catalogo.innerHTML = "";
  crearVolver(mostrarGalerias);

  galeria.tiendas
    .filter(t =>
      filtroUbicacion.value === "todos" ||
      t.ubicacion === filtroUbicacion.value
    )
    .forEach(tienda => {
      let div = document.createElement("div");
      div.className = "producto";

      div.innerHTML = `
        <img src="${tienda.imagen}">
        <h3>${tienda.nombre}</h3>
        <p>${tienda.ubicacion}</p>
        <div class="btn">Ver productos</div>
      `;

      div.onclick = () => mostrarProductos(tienda, galeria);
      catalogo.appendChild(div);
    });
}

/* ---------------- PRODUCTOS ---------------- */
function mostrarProductos(tienda, galeria) {
  catalogo.innerHTML = "";
  crearVolver(() => mostrarTiendas(galeria));

  let productosFiltrados = tienda.productos.filter(p => {
    if (filtroCategoria === "Todas") return true;
    return p.nombre.toLowerCase().includes(filtroCategoria.toLowerCase());
  });

  productosFiltrados.forEach(producto => {
    let div = document.createElement("div");
    div.className = "producto";

    div.innerHTML = `
      <img src="${producto.imagen}">
      <h3>${producto.nombre}</h3>
      <p>${tienda.ubicacion}</p>
      <p>Precio: S/ ${producto.precio}</p>
      <input type="number" min="1" value="1">
      <div class="btn">Solicitar pedido</div>
    `;

    let input = div.querySelector("input");
    let btn = div.querySelector(".btn");

    btn.onclick = (e) => {
      e.stopPropagation();

      let cant = parseInt(input.value);
      let total = cant * producto.precio;

      let msg = `Hola, vengo de Centro de Lima Store, quiero pedir ${cant} ${producto.nombre} de la tienda ${tienda.nombre} por un total de S/ ${total}`;

      let url =
        "https://wa.me/51921516331?text=" +
        encodeURIComponent(msg);

      window.open(url, "_blank");
    };

    catalogo.appendChild(div);
  });
}

/* ---------------- FILTROS ---------------- */
function filtrarCategoria(cat) {
  filtroCategoria = cat;
  mostrarTiendasFiltradas();
}

function mostrarTiendasFiltradas() {
  catalogo.innerHTML = "";
  crearVolver(mostrarGalerias);

  galerias.forEach(galeria => {
    galeria.tiendas
      .filter(t =>
        filtroUbicacion.value === "todos" ||
        t.ubicacion === filtroUbicacion.value
      )
      .filter(t => {
        if (filtroCategoria === "Todas") return true;

        return t.productos.some(p =>
          p.nombre.toLowerCase().includes(filtroCategoria.toLowerCase())
        );
      })
      .forEach(tienda => {
        let div = document.createElement("div");
        div.className = "producto";

        div.innerHTML = `
          <img src="${tienda.imagen}">
          <h3>${tienda.nombre}</h3>
          <p>${tienda.ubicacion}</p>
          <div class="btn">Ver productos</div>
        `;

        div.onclick = () => mostrarProductos(tienda, galeria);
        catalogo.appendChild(div);
      });
  });
}

/* ---------------- EVENTOS ---------------- */
buscador.addEventListener("input", mostrarGalerias);

filtroUbicacion.addEventListener("change", () => {
  if (filtroCategoria === "Todas") {
    mostrarGalerias();
  } else {
    mostrarTiendasFiltradas();
  }
});

/* INIT */
mostrarGalerias();
