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
          { nombre: "Cargador portátil BOSSNEY", precio: 34, imagen: "ISUTECH/doggy.jpg" },
          { nombre: "Cargador Portátil ROMAX", precio: 37, imagen: "ISUTECH/jessica.jpg" },
	  { nombre: "Cargador Portátil BIG-GER", precio: 37, imagen: "ISUTECH/mufar.jpg" },
          { nombre: "Cargador Portátil HOCO J102", precio: 37, imagen: "ISUTECH/juego.jpg" },
	  { nombre: "Cargador Portátil J111", precio: 29, imagen: "ISUTECH/salir.jpg" },
          { nombre: "Cargador Portátil Aldeepo", precio: 67, imagen: "ISUTECH/atrevide.jpg" },
	  { nombre: "Cargador Portátil YESIDO", precio: 45, imagen: "ISUTECH/raulromero.jpg" },
          { nombre: "Cargador Portátil ONCE", precio: 78, imagen: "ISUTECH/ahorrar.jpg" },
	  { nombre: "Cargador Portátil ROMAX", precio: 36, imagen: "ISUTECH/romax.jpg" },
          { nombre: "Cargador Portátil HOCO J160A", precio: 62, imagen: "ISUTECH/mintiendo.jpg" },
	  { nombre: "Cargador Portátil GOTEC", precio: 34, imagen: "ISUTECH/eso.jpg" },
          { nombre: "Cargador Portátil PL-46", precio: 17.5, imagen: "ISUTECH/paguen.jpg" },
	  { nombre: "Audífono Inalámbrico Vincha P47", precio: 11, imagen: "ISUTECH/yes.jpg" },
          { nombre: "Cargador Portátil GENGXIN", precio: 34, imagen: "ISUTECH/gpt.jpg" },
	  { nombre: "Cargador Portátil GENGXIN GX-PB10B", precio: 24, imagen: "ISUTECH/loco.jpg" },
          { nombre: "Audífono Inalámbrico CAT", precio: 28, imagen: "ISUTECH/planes.jpg" },
	  { nombre: "Cargador Portátil VEX", precio: 27, imagen: "ISUTECH/llamo.jpg" },
          { nombre: "Audífono Inalámbrico Vincha GENGXIN", precio: 29, imagen: "ISUTECH/amor.jpg" },
	  { nombre: "Audífono Inalámbrico Vincha P9 Pro Max", precio: 15, imagen: "ISUTECH/casarme.jpg" },
          { nombre: "Audífono Inalámbrico Vincha BIG-GER", precio: 38, imagen: "ISUTECH/llorar.jpg" },
	  { nombre: "Audífono Inalámbrico Vincha MOVISUN", precio: 68, imagen: "ISUTECH/teamo.jpg" },
          { nombre: "Audífono Inalámbrico Vincha HOCO W68", precio: 68, imagen: "ISUTECH/unicachi.jpg" },
	  { nombre: "Audífomo Inalámbrico Vincha ULT WEAR", precio: 40, imagen: "ISUTECH/cono.jpg" },
          { nombre: "Trípode selfie TOMATE", precio: 73, imagen: "ISUTECH/nose.jpg" },
	  { nombre: "Audífono Inalámbrico Vincha MOVISUN", precio: 82, imagen: "ISUTECH/alterado.jpg" },
          { nombre: "Audífono Inalámbrico Tipo Cuéllar HOCO", precio: 49, imagen: "ISUTECH/compañera.jpg" },
	  { nombre: "Audífono Inalámbrico Tipo Cuéllar MOVISUN", precio: 42, imagen: "ISUTECH/spock.jpg" },
          { nombre: "Audífono Inalámbrico Tipo Cuéllar GOTEC", precio: 36, imagen: "ISUTECH/importante.jpg" },
	  { nombre: "Audífono Inalámbrico Tipo Cuéllar EWTTO", precio: 21, imagen: "ISUTECH/siamor.jpg" },
          { nombre: "Audífono Inalámbrico Tipo Cuéllar BOSSNEY", precio: 22, imagen: "ISUTECH/mother.jpg" },
	  { nombre: "Audífono Inalámbrico Tipo Cuéllar BIG-GER", precio: 20.5, imagen: "ISUTECH/porque.jpg" },
          { nombre: "Trípode selfie BOSSNEY", precio: 10.5, imagen: "ISUTECH/hijo.jpg" },
	  { nombre: "Trípode selfie R1", precio: 8.5, imagen: "ISUTECH/fabiola.jpg" },
          { nombre: "Car holder DEXBO", precio: 11, imagen: "ISUTECH/hijos.jpg" },
	  { nombre: "Trípode Selfie Bracket", precio: 11, imagen: "ISUTECH/nomedijo.jpg" },
          { nombre: "Car holder DEXBO", precio: 11, imagen: "ISUTECH/mama.jpg" },
	  { nombre: "Trípode selfie BOSSNEY BS-E6808", precio: 15, imagen: "ISUTECH/hablar.jpg" },
          { nombre: "Trípode selfie BOSSNEY BS-E6812", precio: 26, imagen: "ISUTECH/mentir.jpg" },
	  { nombre: "Trípode selfie A14", precio: 37, imagen: "ISUTECH/calendario.jpg" },
          { nombre: "Audífono Inalámbrico Tipo Cuéllar MOVISUN Flex Súper2", precio: 44, imagen: "ISUTECH/desaparecer.jpg" },
	  { nombre: "Car holder BOSSNEY BS-E6820", precio: 9.5, imagen: "ISUTECH/proyecto.jpg" },
          { nombre: "Car holder ROMAX TCH0115", precio: 14, imagen: "ISUTECH/vivir.jpg" },
	  { nombre: "Moto holder cityBaihuo", precio: 10, imagen: "ISUTECH/wtsp.jpg" },
          { nombre: "Clabe USB para impresoras, fax y escáners", precio: 5, imagen: "ISUTECH/tequiero.jpg" },
	  { nombre: "USBHUB Hi-speed", precio: 16, imagen: "ISUTECH/persona.jpg" },
          { nombre: "Cable de poder PC15 Hochi", precio: 6, imagen: "ISUTECH/pena.jpg" },
	  { nombre: "Parlante Bluetooth DEXBO (DE-P2656B)", precio: 49, imagen: "ISUTECH/leo.jpg" },
          { nombre: "Mouse óptico con cable SUPER (PC05)", precio: 11, imagen: "ISUTECH/ejemplo.jpg" },
	  { nombre: "Parlante Bluetooth Demgel", precio: 20, imagen: "ISUTECH/krys.jpg" },
          { nombre: "Parlante Bluetooth MODEL", precio: 26, imagen: "ISUTECH/limpiar.jpg" },
	  { nombre: "Mouse óptico con cable SUPER", precio: 7, imagen: "ISUTECH/dormido.jpg" },
          { nombre: "Parlante Bluetooth EWTTO", precio: 21, imagen: "ISUTECH/taxi.jpg" },
	  { nombre: "Mouse óptico con cable SUPER", precio: 11, imagen: "ISUTECH/perro.jpg" },
          { nombre: "Mouse óptico inalámbrico CYBERTEL", precio: 21, imagen: "ISUTECH/junior.jpg" },
	  { nombre: "Mouse óptico con cable Hochi Jukucha", precio: 7, imagen: "ISUTECH/prob.jpg" },
          { nombre: "Antena de señal 802 IIN", precio: 16, imagen: "ISUTECH/casar.jpg" },
	  { nombre: "USBHUB 303", precio: 13, imagen: "ISUTECH/Naty.jpg" },
          { nombre: "Mouse óptico inalámbrico CYBERTEL Prince 2", precio: 24, imagen: "ISUTECH/aceptar.jpg" },
	  { nombre: "Teclado Hochi", precio: 19, imagen: "ISUTECH/campamento.jpg" },
          { nombre: "Teclado ROMAX", precio: 19, imagen: "ISUTECH/numero.jpg" },
	  { nombre: "Teclado SUPER", precio: 19, imagen: "ISUTECH/kainos.jpg" },
          { nombre: "Mouse Pad Hochi", precio: 8.5, imagen: "ISUTECH/jord.jpg" },
	  { nombre: "Cargador Universal", precio: 7, imagen: "ISUTECH/siete.jpg" },
          { nombre: "Adaptador micro-USB to lightning", precio: 5, imagen: "ISUTECH/saludar.jpg" },
	  { nombre: "Adaptador 2 en 1 Type C + microUSB", precio: 7, imagen: "ISUTECH/maestría.jpg" },
          { nombre: "Lector de tarjetas de memoria SUCA", precio: 7, imagen: "ISUTECH/enque.jpg" },
	  { nombre: "Adaptador USB a micro-USB", precio: 4.5, imagen: "ISUTECH/broma.jpg" },
          { nombre: "Adaptador Type C to USB-A", precio: 5, imagen: "ISUTECH/marketing.jpg" },
	  { nombre: "Adaptador USB-A to Type-C", precio: 5, imagen: "ISUTECH/futbol.jpg" },
          { nombre: "Adaptador micro-USB to Type C", precio: 5.5, imagen: "ISUTECH/graduación.jpg" },
	  { nombre: "Adaptador Card Reader + USBHUB", precio: 7, imagen: "ISUTECH/puerta.jpg" },
          { nombre: "Adaptador SD Card to USB", precio: 25, imagen: "ISUTECH/colores.jpg" }
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
          { nombre: "PARLANTE LIDIMI X-BASS", precio: 148, imagen: "MATHIAS/importar.jpg" },
          { nombre: "PARLANTE LIDIMI EXTRA-BASS", precio: 148, imagen: "MATHIAS/rico.jpg" },
	  { nombre: "PARLANTE LIDIMI BASS+ LDS007AC", precio: 80, imagen: "MATHIAS/bandana.jpg" },
	  { nombre: "PARLANTE LIDIMI EXTRA-BASS (LD-S010AC/R)", precio: 80, imagen: "MATHIAS/carlos.jpg" },
	  { nombre: "PARLANTE EWTTO EXTREME BASS", precio: 29, imagen: "MATHIAS/decir.jpg" },
          { nombre: "PARLANTE WIRELESS SPEAKER GREAT BASS", precio: 64, imagen: "MATHIAS/excel.jpg" },
	  { nombre: "PARLANTE EWTTO EW-P465BC", precio: 93, imagen: "MATHIAS/mother.jpg" },
	  { nombre: "PARLANTE LIDIMI EXTRA-BASS LD-S639", precio: 113, imagen: "MATHIAS/flavia.jpg" },
	  { nombre: "PARLANTE YUNTEL GREAT BASS", precio: 64, imagen: "MATHIAS/imaginando.jpg" },
          { nombre: "PARLANTE LIDIMI X-BASS", precio: 204, imagen: "MATHIAS/colocar.jpg" },
	  { nombre: "PARLANTE LIDIMI EUROPEAN TECH", precio: 224, imagen: "MATHIAS/economia.jpg" },
	  { nombre: "PARLANTE LIDIMI BAJO-EXTRA", precio: 214, imagen: "MATHIAS/bronca.jpg" },
	  { nombre: "PARLANTE SOUND JET HF-161", precio: 33, imagen: "MATHIAS/pasion.jpg" },
          { nombre: "PARLANTE MAXTRON ZENITH", precio: 108, imagen: "MATHIAS/ati.jpg" },
	  { nombre: "PARLANTE MAXTRON HERTZ MX-S200", precio: 108, imagen: "MATHIAS/misionero.jpg" },
	  { nombre: "PARLANTE LIDIMI EXTRA-BASS LD-S060AC", precio: 238, imagen: "MATHIAS/juntas.jpg" },
	  { nombre: "LIGHT & MUSIC K-036", precio: 29, imagen: "MATHIAS/mosquitos.jpg" },
          { nombre: "PARLANTE EWTTO EXTREME BASS ET-P5710MB", precio: 83, imagen: "MATHIAS/cabeza.jpg" },
	  { nombre: "PARLANTE DEXBO DE-P456MBC", precio: 88, imagen: "MATHIAS/iglesia.jpg" },
	  { nombre: "PARLANTE EWTTO EXTREME BASS (ET-P5810MBC)", precio: 73, imagen: "MATHIAS/desayuno.jpg" },
	  { nombre: "PARLANTE EWTTO EXTREME BASS (ET-P5115MB)", precio: 73, imagen: "MATHIAS/lloro.jpg" },
          { nombre: "PARLANTE LIDIMI EXTRA-BASS (LD-S857)", precio: 50, imagen: "MATHIAS/ya.jpg" },
	  { nombre: "PARLANTE YUNTEL (CHARGE6 LED)", precio: 49, imagen: "MATHIAS/lonjas.jpg" },
	  { nombre: "PARLANTE EWTTO EXTREME BASS", precio: 64, imagen: "MATHIAS/quitar.jpg" },
	  { nombre: "YUNTEL POWERFUL BOOMBOX", precio: 49, imagen: "MATHIAS/kim.jpg" },
          { nombre: "PARLANTE EWTTO (ET-P1176BT)", precio: 59, imagen: "MATHIAS/aplastar.jpg" },
	  { nombre: "PARLANTE YUNTEL XTREMEP192", precio: 49, imagen: "MATHIAS/presupuesto.jpg" },
	  { nombre: "PARLANTE LIDIMI X-BASS (LD-S647)(IPX5)", precio: 74, imagen: "MATHIAS/parlante.jpg" },
	  { nombre: "PARLANTE  EWTTO (EW-P102B)", precio: 64, imagen: "MATHIAS/tirsa.jpg" },
          { nombre: "PARLANTE LIDIMI X-BASS (LD-S877)", precio: 69, imagen: "MATHIAS/moises.jpg" },
	  { nombre: "PARLANTE EWTTO ET-P6538BR", precio: 34, imagen: "MATHIAS/ahorrar.jpg" },
	  { nombre: "PARLANTE YUNTEL P PRO7", precio: 59, imagen: "MATHIAS/anos.jpg" },
	  { nombre: "PARLANTE YUNTEL BOOMBOX 360 (IPX6)", precio: 64, imagen: "MATHIAS/bonito.jpg" },
	  { nombre: "PARLANTE YUNTEL BOOMBOX 4MINI", precio: 54, imagen: "MATHIAS/provincia.jpg" }
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
	nombre: "ECO Tecnología",
        ubicacion: "Centro de Lima",
        imagen: "Logos/ECOTECNOLOGIA.jpeg",
        productos: [
          { nombre: "Cargador", precio: 25 },
          { nombre: "Audífonos", precio: 60 }
        ]
      },
      {
	nombre: "IMPORTACIONES SURITEC",
	ubicacion: "Centro de Lima",
	imagen: "Logos/SURITEC.jpg",
	productos: [
	  { nombre: "Cargador rápido Multi-protocolo", precio: 15, imagen: "SURITEC/colmer.jpg" },
	  { nombre: "Cargador Miccell", precio: 24, imagen: "SURITEC/xdd.jpg" },
	  { nombre: "Cargador Miccell GaN 35W", precio: 38, imagen: "SURITEC/yamal.jpg" },
	  { nombre: "Cargador IP 20W", precio: 18, imagen: "SURITEC/olise.jpg" },
	  { nombre: "Cargador USB-C 25W", precio: 18, imagen: "SURITEC/central.jpg" },
	  { nombre: "Adaptador de pared 35W USB-C+C", precio: 39, imagen: "SURITEC/hernandez.jpg" },
	  { nombre: "Cargador IP 40W Cable Trenzado (OEM)", precio: 29, imagen: "SURITEC/.jpg" },
	  { nombre: "Cargador Samsung 25W (OEM)", precio: 17, imagen: "SURITEC/retomar.jpg" },
	  { nombre: "Cargador Samsung 45W", precio: 18, imagen: "SURITEC/bob.jpg" },
	  { nombre: "Cargador Samsung 65W (OEM)", precio: 24, imagen: "SURITEC/ostinger.jpg" },
	  { nombre: "Cargador Xiaomi 67W segunderos (OEM)", precio: 23, imagen: "SURITEC/soler.jpg" },
	  { nombre: "Cargador Xiaomi 120W segunderos", precio: 24, imagen: "SURITEC/why.jpg" },
	  { nombre: "Cargador Turbo Motorola V8 30W", precio: 16, imagen: "SURITEC/mother.jpg" },
	  { nombre: "Cargadores Turbo Motorola", precio: 29, imagen: "SURITEC/pibe.jpg" },
	  { nombre: "Cargador Turbo Motorola 125W", precio: 41, imagen: "SURITEC/preguntando.jpg" },
	  { nombre: "Cargador Honor 120W segunderos (OEM)", precio: 25, imagen: "SURITEC/pesado.jpg" },
	  { nombre: "Cargador Honor 66W segunderos (OEM)", precio: 21, imagen: "SURITEC/entender.jpg" },
	  { nombre: "Super Fast Charger Kit", precio: 24, imagen: "SURITEC/jorge.jpg" },
	  { nombre: "Cargador Tranyoo 55W Tipo C", precio: 19, imagen: "SURITEC/caldos.jpg" },
	  { nombre: "Cargador Tranyoo 67W Tipo C", precio: 20, imagen: "SURITEC/pinos.jpg" },
	  { nombre: "Cargador Original 6A Tipo C", precio: 10, imagen: "SURITEC/.jpg" },
	  { nombre: "Cargador Original 4.2 Tipo C", precio: 9, imagen: "SURITEC/mundo.jpg" },
	  { nombre: "Cargador Redd 3.1A Tipo V8", precio: 8, imagen: "SURITEC/simon.jpg" },
	  { nombre: "Cargador Redd 3.1A Tipo C", precio: 9, imagen: "SURITEC/colorado.jpg" },
	  { nombre: "Cargador Rápido Kit REDD", precio: 10, imagen: "SURITEC/jackson.jpg" },
	  { nombre: "Cargador Brysson 67W 6.2A Tipo C", precio: 13, imagen: "SURITEC/cartel.jpg" },
	  { nombre: "Cargador Brysson 200W 10A Tipo C", precio: 15, imagen: "SURITEC/pilo.jpg" },
	  { nombre: "Cargador REDD 6.2 A Tipo C", precio: 15, imagen: "SURITEC/love.jpg" },
	  { nombre: "Cargador REDD 7.2A Tipo C 75W", precio: 15, imagen: "SURITEC/zurita.jpg" },
	  { nombre: "Cargador REDD 6.2A Tipo Line", precio: 16, imagen: "SURITEC/cardigan.jpg" },
	  { nombre: "Cargador REDD 8A Tipo V8", precio: 17, imagen: "SURITEC/mono.jpg" },
	  { nombre: "Cargador REDD 8A Tipo C", precio: 17, imagen: "SURITEC/semis.jpg" },
	  { nombre: "Cargador REDD 7.2A Tipo C", precio: 15, imagen: "SURITEC/human.jpg" },
	  { nombre: "Cargador REDD 75W 2 entradas C", precio: 15, imagen: "SURITEC/somos.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" },
	  { nombre: "", precio: , imagen: "SURITEC/.jpg" }
	]
      },
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
          { nombre: "Audífonos Pro 2 con ANC", precio: 50, imagen: "SUMAQ/audifonos2dageneracionpro2conanc.jpg" },
          { nombre: "Audífonos Pro 3 con ANC", precio: 53, imagen: "SUMAQ/audifonospro3conanc.jpg" },
	  { nombre: "Audífonos 4ta generación con ANC (Siri)", precio: 50, imagen: "SUMAQ/audifonosconsiri.jpg" },
          { nombre: "Audífonos Redmi Buds 6 Original", precio: 40, imagen: "SUMAQ/audifonosredmi6.jpg" },
	  { nombre: "Audífonos Redmi Buds 6 Active", precio: 58, imagen: "SUMAQ/redmibus6active.jpg" },
          { nombre: "Audífonos Tour Pro 3 JBL", precio: 50, imagen: "SUMAQ/tourpro3jbl.jpg" },
	  { nombre: "Audífonos Galaxy Buds 2 Pro", precio: 38, imagen: "SUMAQ/audifonogalaxybuds2.jpg" },
          { nombre: "Audífonos Redmi Buds 8 Lite", precio: 80, imagen: "SUMAQ/guastavino.jpg" },
	  { nombre: "Audífonos HandsFree X0 - BE44", precio: 20, imagen: "SUMAQ/otarola.jpg" },
          { nombre: "Audífonos X0 - X33", precio: 24, imagen: "SUMAQ/perezguedes.jpg" },
	  { nombre: "Audífonos LBX 330", precio: 31, imagen: "SUMAQ/chiquitin.jpg" },
          { nombre: "Audífonos Stereo M100", precio: 45, imagen: "SUMAQ/quintero.jpg" },
	  { nombre: "Audífonos Arete YYK-108", precio: 30, imagen: "SUMAQ/carvallo.jpg" },
          { nombre: "Audífonos X62 Pro", precio: 30, imagen: "SUMAQ/germandenis.jpg" },
	  { nombre: "Audífonos X0-G43 OWS Pods", precio: 57, imagen: "SUMAQ/panatejada.jpg" },
          { nombre: "Audífonos Forofone FQ14", precio: 42, imagen: "SUMAQ/polo.jpg" },
	  { nombre: "Audífonos AOC", precio: 30, imagen: "SUMAQ/orejaflores.jpg" },
          { nombre: "Audífonos Sport Cozy", precio: 50, imagen: "SUMAQ/rubiños.jpg" },
	  { nombre: "Audífonos HOCO EQ3", precio: 25, imagen: "SUMAQ/chumpitaz.jpg" },
          { nombre: "Audífonos HORA EQ33", precio: 24, imagen: "SUMAQ/challe.jpg" },
	  { nombre: "Audífonos BoroFone BW29", precio: 35, imagen: "SUMAQ/pericoleon.jpg" },
          { nombre: "Audífonos BoroFone W87", precio: 50, imagen: "SUMAQ/latorre.jpg" },
	  { nombre: "Audífonos Modelo W36", precio: 50, imagen: "SUMAQ/britos.jpg" },
          { nombre: "Audífonos BoroFone FQ4", precio: 45, imagen: "SUMAQ/zubzuck.jpg" },
	  { nombre: "Audífonos MoviSun EarBox", precio: 47, imagen: "SUMAQ/paucar.jpg" },
          { nombre: "Audífonos MoviSun T13", precio: 39, imagen: "SUMAQ/pasdani.jpg" },
	  { nombre: "Audífonos MoviSun T15 Buds", precio: 48, imagen: "SUMAQ/passaul.jpg" },
          { nombre: "Audífonos MoviSun T17", precio: 41, imagen: "SUMAQ/pasamoretti.jpg" },
	  { nombre: "Audífonos MoviSun T21", precio: 36, imagen: "SUMAQ/pasmaritza.jpg" },
          { nombre: "Audífonos MoviSun Ear Clip", precio: 45, imagen: "SUMAQ/miyayitos.jpg" },
	  { nombre: "Vincha JBL Tune 520", precio: 120, imagen: "SUMAQ/samueltomasto.jpg" },
          { nombre: "Vincha JBL Tune 720", precio: 175, imagen: "SUMAQ/franco.jpg" },
	  { nombre: "Vincha JBL Tune 720", precio: 105, imagen: "SUMAQ/kitypoh.jpg" },
          { nombre: "Vincha HOCO W53", precio: 40, imagen: "SUMAQ/marie.jpg" },
	  { nombre: "Vincha HOCO W45", precio: 40, imagen: "SUMAQ/daniabec.jpg" },
          { nombre: "AceFast con ANC", precio: 77, imagen: "SUMAQ/caminajarro.jpg" },
	  { nombre: "AOC con Vincha", precio: 65, imagen: "SUMAQ/pri.jpg" },
          { nombre: "Audífonos HOCO W53 Plus con ANC", precio: 60, imagen: "SUMAQ/pro.jpg" },
	  { nombre: "Audífonos HOCO W35", precio: 38, imagen: "SUMAQ/pru.jpg" },
          { nombre: "Audífonos HOCO W35 MAX", precio: 45, imagen: "SUMAQ/max.jpg" },
	  { nombre: "Audífonos HOCO con ANC", precio: 66, imagen: "SUMAQ/yokoono.jpg" },
	  { nombre: "Audífonos HOCO W52", precio: 40, imagen: "SUMAQ/ydaleu.jpg" },
          { nombre: "Audífonos ForoFone BO22", precio: 50, imagen: "SUMAQ/cuto.jpg" },
	  { nombre: "Audífonos HOCO W52", precio: 37, imagen: "SUMAQ/jaze.jpg" },
          { nombre: "Audífonos BoroFone BO11", precio: 38, imagen: "SUMAQ/nekroos.jpg" },
	  { nombre: "Audífonos DexBo A993B", precio: 26, imagen: "SUMAQ/jota.jpg" },
          { nombre: "Audífonos Bear WBK845", precio: 32, imagen: "SUMAQ/stick.jpg" },
	  { nombre: "Audífonos MZ-0232", precio: 14, imagen: "SUMAQ/choque.jpg" },
          { nombre: "Audífonos Mickey Mouse en vincha", precio: 30, imagen: "SUMAQ/almendrades.jpg" },
	  { nombre: "Audífonos MoviSun Urban Rock2", precio: 68, imagen: "SUMAQ/jairwong.jpg" },
	  { nombre: "Audífonos MoviSun con ANC", precio: 90, imagen: "SUMAQ/skill.jpg" },
          { nombre: "Audífonos Urban Rock", precio: 60, imagen: "SUMAQ/litzen.jpg" },
	  { nombre: "Audífonos MoviSun Flex Super", precio: 36, imagen: "SUMAQ/klibre.jpg" },
          { nombre: "Audífonos MoviSun Flex Super 53 horas", precio: 44, imagen: "SUMAQ/hammper.jpg" },
	  { nombre: "Audífonos MoviSun Flex 3", precio: 30, imagen: "SUMAQ/strike.jpg" },
          { nombre: "Audífonos MoviSun Flex Super 3", precio: 56, imagen: "SUMAQ/gasper.jpg" },
	  { nombre: "Audífonos MoviSun Flex Super 4", precio: 60, imagen: "SUMAQ/ghost.jpg" },
          { nombre: "Audífonos HOCO ES62", precio: 45, imagen: "SUMAQ/cafu.jpg" },
	  { nombre: "Audífonos HOCO ES74", precio: 26, imagen: "SUMAQ/aczino.jpg" },
          { nombre: "Audífonos HOCO ES70", precio: 36, imagen: "SUMAQ/chuty.jpg" },
	  { nombre: "Audífonos BoroFone ES644", precio: 38, imagen: "SUMAQ/skone.jpg" },
          { nombre: "Audífonos BoroFone ES68", precio: 38, imagen: "SUMAQ/wos.jpg" },
	  { nombre: "AceFast 160 horas", precio: 50, imagen: "SUMAQ/papo.jpg" },
          { nombre: "Vincha REDD 3059BT", precio: 23, imagen: "SUMAQ/dtoke.jpg" },
	  { nombre: "Vincha REDD 3055TB", precio: 28, imagen: "SUMAQ/force.jpg" },
          { nombre: "Audífono MoviSun + Funda", precio: 14, imagen: "SUMAQ/katacrist.jpg" }
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
        nombre: "FOX",
        ubicacion: "Centro de Lima",
        imagen: "Galeria/FOX.jpg",
        productos: [
          { nombre: "Cubo 20W Iphone Entrada C", precio: 25, imagen: "FOX/cubofox.jpg" },
          { nombre: "Cubo 25W Iphone Entrada C", precio: 25, imagen: "FOX/cubo25.jpg" },
	  { nombre: "Cubo 40W Iphone Entrada C", precio: 25, imagen: "FOX/cubito.jpg" },
          { nombre: "Cable para Iphone Trenzado C a C", precio: 25, imagen: "FOX/dafneverdi.jpg" },
	  { nombre: "Cable para Iphone C a Lightning - 1M", precio: 25, imagen: "FOX/doggy.jpg" },
          { nombre: "Cable para Iphone C a Lightning - 2M", precio: 25, imagen: "FOX/moka.jpg" },
	  { nombre: "Cable y Cubo para Iphone C a C Trenzado", precio: 25, imagen: "FOX/almada.jpg" },
          { nombre: "Cable y Cubo para Iphone C a Lightning", precio: 25, imagen: "FOX/estruendo.jpg" },
	  { nombre: "Magsafe 20 000 mAh", precio: 25, imagen: "FOX/phantom.jpg" },
          { nombre: "Magsafe 5 000 mAh", precio: 25, imagen: "FOX/anarkia.jpg" },
	  { nombre: "Magsafe 10 000 mAh", precio: 25, imagen: "FOX/fabi.jpg" },
          { nombre: "Airpods Max Calidad A1", precio: 25, imagen: "FOX/tq.jpg" },
	  { nombre: "Airpods Max Calidad A2", precio: 25, imagen: "FOX/emzi.jpg" },
          { nombre: "Airpods Max Calidad A3", precio: 25, imagen: "FOX/porras.jpg" },
	  { nombre: "Audífonos Cable Apple", precio: 25, imagen: "FOX/maccix.jpg" },
          { nombre: "Airpods Pro 2da Generación + ANC", precio: 25, imagen: "FOX/kyle.jpg" },
	  { nombre: "Airpods 4ta Generación + ANC", precio: 25, imagen: "FOX/gil.jpg" },
          { nombre: "Airpods Pro 2da Generación sin ANC", precio: 25, imagen: "FOX/tonyocejo.jpg" },
	  { nombre: "Airpods Pro 3era Generación + ANC", precio: 25, imagen: "FOX/camacho.jpg" },
          { nombre: "Magnetic Charger", precio: 25, imagen: "FOX/gump.jpg" },
	  { nombre: "Parlante Boombox 4 JBL", precio: 25, imagen: "FOX/peru.jpg" },
          { nombre: "Parlante Flip 7 JBL", precio: 25, imagen: "FOX/argentina.jpg" },
	  { nombre: "Parlante Grip JBL", precio: 25, imagen: "FOX/bolivia.jpg" },
          { nombre: "Parlante Go 6 JBL", precio: 25, imagen: "FOX/brasil.jpg" },
	  { nombre: "Parlante Go 4 JBL", precio: 25, imagen: "FOX/chile.jpg" },
          { nombre: "Parlante Go 4 Pro JBL", precio: 25, imagen: "FOX/colombia.jpg" },
	  { nombre: "Parlante Charge6 JBL", precio: 25, imagen: "FOX/ecuador.jpg" },
          { nombre: "Parlante Boombox 4 Mini JBL", precio: 25, imagen: "FOX/paraguay.jpg" },
	  { nombre: "Parlante Xtreme4", precio: 25, imagen: "FOX/uruguay.jpg" },
          { nombre: "Parlante Clip 5 JBL", precio: 25, imagen: "FOX/venezuela.jpg" },
	  { nombre: "Parlante P26 JBL", precio: 25, imagen: "FOX/usa.jpg" },
          { nombre: "Parlante P23 JBL", precio: 25, imagen: "FOX/canada.jpg" },
	  { nombre: "Parlante P12 JBL", precio: 25, imagen: "FOX/mexico.jpg" },
          { nombre: "Parlante Alaxe", precio: 25, imagen: "FOX/belice.jpg" },
	  { nombre: "Parlante Alaxe Kids", precio: 25, imagen: "FOX/guatemala.jpg" },
          { nombre: "Parlante Alaxe Pro Max", precio: 25, imagen: "FOX/honduras.jpg" },
	  { nombre: "Parlante Alaxe Pro Max Mundial", precio: 25, imagen: "FOX/elsalvador.jpg" },
          { nombre: "Parlante TO-133 TOMATE", precio: 25, imagen: "FOX/panama.jpg" },
	  { nombre: "Parlante X8-Plus TOMATE", precio: 25, imagen: "FOX/jamaica.jpg" },
          { nombre: "Parlante Xiaomi Sound Pocket", precio: 25, imagen: "FOX/puertorico.jpg" },
	  { nombre: "Parlante Soonbox 120", precio: 25, imagen: "FOX/haiti.jpg" },
          { nombre: "Parlante Knup", precio: 25, imagen: "FOX/curazao.jpg" },
	  { nombre: "Parlante Alexa Kids Echo DOT 5ta", precio: 25, imagen: "FOX/costarica.jpg" },
          { nombre: "Parlante Koleer H37", precio: 25, imagen: "FOX/portugal.jpg" },
	  { nombre: "Parlante Crate Bear B-1", precio: 25, imagen: "FOX/españa.jpg" },
          { nombre: "Parlante Mickey & Minnie", precio: 25, imagen: "FOX/andorra.jpg" },
	  { nombre: "Parlante C/ Micrófono WS-501", precio: 25, imagen: "FOX/francia.jpg" },
          { nombre: "Parlante C/ Micrófono JQS-405", precio: 25, imagen: "FOX/alemania.jpg" },
	  { nombre: "Parlante HF-3222", precio: 25, imagen: "FOX/suiza.jpg" },
          { nombre: "Parlante Party Box 320 JBL", precio: 25, imagen: "FOX/polonia.jpg" },
	  { nombre: "Parlante Party Box 120 JBL", precio: 25, imagen: "FOX/chequia.jpg" },
          { nombre: "Audífonos Tour Pro2 JBL", precio: 25, imagen: "FOX/eslovaquia.jpg" },
	  { nombre: "Audífonos Tour Pro3 JBL", precio: 25, imagen: "FOX/belgica.jpg" },
          { nombre: "Audífonos Tour Pro4 JBL", precio: 25, imagen: "FOX/italia.jpg" },
	  { nombre: "Audífonos Tour Pro5 JBL", precio: 25, imagen: "FOX/holanda.jpg" },
          { nombre: "Audífonos Tour Pro6", precio: 25, imagen: "FOX/sanmarino.jpg" },
	  { nombre: "Audífonos M62 Traductor +130 idiomas", precio: 25, imagen: "FOX/albania.jpg" },
          { nombre: "Audífonos Galaxy Buds 2 Pro", precio: 25, imagen: "FOX/serbia.jpg" },
	  { nombre: "Audífonos Galaxy Buds 3 Pro", precio: 25, imagen: "FOX/estonia.jpg" },
          { nombre: "Audífonos Galaxy Buds 10 Pro", precio: 25, imagen: "FOX/bielorrusia.jpg" },
	  { nombre: "Audífonos Galaxy Buds 7 Pro", precio: 25, imagen: "FOX/georgia.jpg" },
          { nombre: "Audífonos Sony Linkbuds", precio: 25, imagen: "FOX/austria.jpg" },
	  { nombre: "Audífonos PowerBeats 2 Pro", precio: 25, imagen: "FOX/turquia.jpg" },
          { nombre: "Vincha de conducción ósea", precio: 25, imagen: "FOX/grecia.jpg" },
	  { nombre: "Audífonos F9", precio: 25, imagen: "FOX/croacia.jpg" },
          { nombre: "Audífonos Bose", precio: 25, imagen: "FOX/macedonia.jpg" },
	  { nombre: "Audífonos Tune 760BT JBL", precio: 25, imagen: "FOX/chipre.jpg" },
          { nombre: "Audífonos P9", precio: 25, imagen: "FOX/noruega.jpg" },
	  { nombre: "Smartwatch c/ chip Niños Tomate TH-C008", precio: 25, imagen: "FOX/suecia.jpg" },
          { nombre: "Smartwatch c/ chip Niños Tomate TH-C010", precio: 25, imagen: "FOX/finlandia.jpg" },
	  { nombre: "Smartwatch c/ chip Niños Tomate TH-C009", precio: 25, imagen: "FOX/israel.jpg" },
          { nombre: "Smartwatch T900 Pro Max EVO", precio: 25, imagen: "FOX/letonia.jpg" },
	  { nombre: "Smartwatch T900 Pro Max GL", precio: 25, imagen: "FOX/lituania.jpg" },
          { nombre: "Smartwatch Ultra 3", precio: 25, imagen: "FOX/montenegro.jpg" },
	  { nombre: "Smartwatch V-Watch X", precio: 25, imagen: "FOX/inglaterra.jpg" },
          { nombre: "Smartwatch Hi Watch Pro", precio: 25, imagen: "FOX/escocia.jpg" },
	  { nombre: "Smartwatch Watch 10 Ultra", precio: 25, imagen: "FOX/irlanda.jpg" },
          { nombre: "Smartwatch HW10 Pro", precio: 25, imagen: "FOX/rusia.jpg" },
	  { nombre: "Smartwatch I10 Mini", precio: 25, imagen: "FOX/mongolia.jpg" },
          { nombre: "Smartwatch Bossney", precio: 25, imagen: "FOX/china.jpg" },
	  { nombre: "Smartwatch T10 Mini", precio: 25, imagen: "FOX/norcorea.jpg" },
          { nombre: "Smartwatch D15 GS", precio: 25, imagen: "FOX/surcorea.jpg" },
	  { nombre: "Smartwatch A25 Ultra Suit", precio: 25, imagen: "FOX/japon.jpg" },
          { nombre: "Smartwatch ZT - K8 Ultra 3", precio: 25, imagen: "FOX/taiwan.jpg" },
	  { nombre: "Smartwatch HK10 Ultra 3 Max", precio: 25, imagen: "FOX/tailandia.jpg" },
          { nombre: "Apple Watch", precio: 25, imagen: "FOX/camboya.jpg" },
	  { nombre: "Smartwatch H26 Ultra+", precio: 25, imagen: "FOX/laos.jpg" },
          { nombre: "Smartwatch MicroWear S11", precio: 25, imagen: "FOX/nepal.jpg" },
	  { nombre: "Smartwatch M99 con chip", precio: 25, imagen: "FOX/pakistan.jpg" },
          { nombre: "Smartwatch VP19 Pro", precio: 25, imagen: "FOX/turkmenistan.jpg" },
	  { nombre: "Smartwatch DW100 Pro Plus con chip", precio: 25, imagen: "FOX/tajikistan.jpg" },
	  { nombre: "Smartwatch H100 con chip", precio: 25, imagen: "FOX/afganistan.jpg" },
          { nombre: "Lentes inteligentes", precio: 25, imagen: "FOX/siria.jpg" },
	  { nombre: "Proyector PRY-012", precio: 25, imagen: "FOX/libano.jpg" },
          { nombre: "Magnetic Selfie Screen Ultra", precio: 25, imagen: "FOX/iran.jpg" },
	  { nombre: "Vlog Screen Ultra", precio: 25, imagen: "FOX/irak.jpg" },
          { nombre: "Proyector HY 300", precio: 25, imagen: "FOX/arabia.jpg" },
	  { nombre: "TV Box Mortal", precio: 25, imagen: "FOX/oman.jpg" },
          { nombre: "Proyector Game", precio: 25, imagen: "FOX/yemen.jpg" },
	  { nombre: "Lámpara G", precio: 25, imagen: "FOX/qatar.jpg" },
          { nombre: "Consola X7M", precio: 25, imagen: "FOX/eau.jpg" },
	  { nombre: "Consola Q8", precio: 25, imagen: "FOX/srilanka.jpg" },
          { nombre: "Consola X2 Ultra G4 GB", precio: 25, imagen: "FOX/egipto.jpg" },
	  { nombre: "Consola X2 Plus 64 GB", precio: 25, imagen: "FOX/libia.jpg" },
          { nombre: "Project X Pro64 GB", precio: 25, imagen: "FOX/argelia.jpg" },
	  { nombre: "R36MAX", precio: 25, imagen: "FOX/marruecos.jpg" },
          { nombre: "R36S", precio: 25, imagen: "FOX/mali.jpg" },
	  { nombre: "Dron E88", precio: 25, imagen: "FOX/sanvicente.jpg" },
          { nombre: "Trípode Q185 c/ sensor", precio: 25, imagen: "FOX/guinea.jpg" },
	  { nombre: "Trípode c/ sensor Q515TK-H", precio: 25, imagen: "FOX/guineabissau.jpg" },
          { nombre: "Trípode C19 c/ sensor", precio: 25, imagen: "FOX/guineaecuatorial.jpg" },
	  { nombre: "Trípode C16", precio: 25, imagen: "FOX/tunez.jpg" },
          { nombre: "Trípode C22", precio: 25, imagen: "FOX/sudan.jpg" },
	  { nombre: "Trípode P325", precio: 25, imagen: "FOX/congo.jpg" },
          { nombre: "Trípode P27-MF", precio: 25, imagen: "FOX/rdcongo.jpg" },
	  { nombre: "Trípode P220-Q + Aro ", precio: 25, imagen: "FOX/angola.jpg" },
          { nombre: "Aro de luz XK-Led G102", precio: 25, imagen: "FOX/somalia.jpg" },
	  { nombre: "Aro de luz LJJ-36", precio: 25, imagen: "FOX/tanzania.jpg" },
          { nombre: "Trípode C22", precio: 25, imagen: "FOX/mozambique.jpg" },
	  { nombre: "Palo de selfie", precio: 25, imagen: "FOX/sudafrica.jpg" },
          { nombre: "TV Box Naranja", precio: 25, imagen: "FOX/esuatini.jpg" },
	  { nombre: "Case Alexa Iron Man", precio: 25, imagen: "FOX/madagascar.jpg" },
          { nombre: "Case Alexa Jack Skelling", precio: 25, imagen: "FOX/seychelles.jpg" },
	  { nombre: "Kids Smartphone", precio: 25, imagen: "FOX/caboverde.jpg" },
          { nombre: "Cámara para niños", precio: 25, imagen: "FOX/ruanda.jpg" },
	  { nombre: "Professional Microphone", precio: 25, imagen: "FOX/gabon.jpg" },
          { nombre: "Electric Juicer", precio: 25, imagen: "FOX/indonesia.jpg" },
	  { nombre: "3IN1 Breakfast Maker", precio: 25, imagen: "FOX/papua.jpg" },
          { nombre: "Cámara TAPO", precio: 25, imagen: "FOX/samoa.jpg" },
	  { nombre: "Cámara FOCO", precio: 25, imagen: "FOX/australia.jpg" },
          { nombre: "Cámara BB Smart", precio: 25, imagen: "FOX/nuevazelanda.jpg" },
	  { nombre: "Walkie Talkie FX", precio: 25, imagen: "FOX/kiribati.jpg" },
          { nombre: "Cofre para reloj", precio: 25, imagen: "FOX/tuvalu.jpg" },
	  { nombre: "Led Light Kit", precio: 25, imagen: "FOX/salomon.jpg" },
          { nombre: "ZERO", precio: 25, imagen: "FOX/lima.jpg" },
	  { nombre: "Case Airpods de 4ta Generación", precio: 25, imagen: "FOX/baires.jpg" },
          { nombre: "Case Airpods de 2da Generación", precio: 25, imagen: "FOX/baires.jpg" },
	  { nombre: "Case Tour Pro", precio: 25, imagen: "FOX/santiago.jpg" },
          { nombre: "Correa Smartwartch", precio: 25, imagen: "FOX/santiago.jpg" },
	  { nombre: "Case Smartwatch", precio: 25, imagen: "FOX/hawaii.jpg" },
	  { nombre: "Cubo 120W Xiaomi", precio: 25, imagen: "FOX/bogota.jpg" },
          { nombre: "Combo 33W Xiaomi", precio: 25, imagen: "FOX/madrid.jpg" },
	  { nombre: "Combo HONOR 120W", precio: 25, imagen: "FOX/roma.jpg" },
          { nombre: "Cable USB a C Xiaomi", precio: 25, imagen: "FOX/oslo.jpg" },
	  { nombre: "Combo 100W Samsung", precio: 25, imagen: "FOX/kabul.jpg" },
          { nombre: "Cable C a C Samsung", precio: 25, imagen: "FOX/tirana.jpg" },
	  { nombre: "Combo 20W Xiaomi", precio: 25, imagen: "FOX/londres.jpg" },
          { nombre: "Combo 120W Xiaomi", precio: 25, imagen: "FOX/tallin.jpg" },
	  { nombre: "Combo 67W Xiaomi", precio: 25, imagen: "FOX/mexicodf.jpg" },
          { nombre: "Combo 25W Samsung", precio: 25, imagen: "FOX/berlin.jpg" },
	  { nombre: "Combo 45W Samsung", precio: 25, imagen: "FOX/puertoprincipe.jpg" },
          { nombre: "Cargador Portatil TITI", precio: 25, imagen: "FOX/bangladesh.jpg" },
	  { nombre: "Xiaomi 2000mAh Original", precio: 25, imagen: "FOX/chipredelnorte.jpg" },
          { nombre: "Cargador Portatil YESIDO 30000", precio: 25, imagen: "FOX/viena.jpg" }
        ]
      },
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

      .forEach(tienda => {

        tienda.productos

          .filter(producto => {

            if (filtroCategoria === "Todas") return true;

            return producto.nombre
              .toLowerCase()
              .includes(filtroCategoria.toLowerCase());

          })

          .forEach(producto => {

            let div = document.createElement("div");

            div.className = "producto";

            div.innerHTML = `
              <img src="${producto.imagen || tienda.imagen}">
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

              let msg =
                `Hola, vengo de Centro de Lima Store, quiero pedir ${cant} ${producto.nombre} de la tienda ${tienda.nombre} por un total de S/ ${total}`;

              let url =
                "https://wa.me/51921516331?text=" +
                encodeURIComponent(msg);

              window.open(url, "_blank");
            };

            catalogo.appendChild(div);

          });

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
