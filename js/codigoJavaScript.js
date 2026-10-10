const productos = [
  { id: "xiaomi-buds-play", nombre: "Xiaomi Buds Play", tipo: "In-ear", categoria: "inear",
    desc: "Audífonos inalámbricos in-ear con estuche de carga.",
    destaca: "In-ear con estuche de carga", ideal: "Uso diario",
    imagen: "image/imagen1.png",
    url: "https://www.amazon.com.mx/Xiaomi-Aud%C3%ADfonos-Inal%C3%A1mbricos-Buds-Play/dp/B0DBHRWRKC" },
  { id: "ugreen-clip", nombre: "UGREEN Clip", tipo: "In-ear", categoria: "inear",
    desc: "Audífonos inalámbricos de diseño abierto con clip, cómodos para llevar todo el día.",
    destaca: "Diseño abierto con clip", ideal: "Ejercicio y uso diario",
    imagen: "image/imagen2.png",
    url: "https://www.amazon.com.mx/UGREEN-Inal%C3%A1mbricos-Reproducci%C3%B3n-Compatibles-Dispositivo/dp/B0DMZWD4JP" },
  { id: "sony-wh-ch520", nombre: "Sony WH-CH520", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos inalámbricos on-ear de Sony, pensados para una larga duración de batería.",
    destaca: "On-ear Bluetooth de gran batería", ideal: "Música y viajes",
    imagen: "image/imagen3.png",
    url: "https://www.amazon.com.mx/Sony-Aud%C3%ADfonos-inal%C3%A1mbricos-WH-CH520-duraci%C3%B3n/dp/B0CFS29Y49" },
  { id: "billboard-soul-track", nombre: "Billboard Soul Track", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos inalámbricos de diadema en color rojo con almohadillas acolchadas.",
    destaca: "Diadema inalámbrica acolchada", ideal: "Música en casa",
    imagen: "image/imagen4.png",
    url: "https://www.amazon.com.mx/Billboard-Aud%C3%ADfonos-Inal%C3%A1mbricos-Soul-Track/dp/B0B7VSCSLD" },
  { id: "haylou-anc", nombre: "HAYLOU ANC", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos inalámbricos con cancelación de ruido y micrófono desmontable.",
    destaca: "Cancelación de ruido y micrófono", ideal: "Trabajo y videollamadas",
    imagen: "image/imagen5.png",
    url: "https://www.amazon.com.mx/HAYLOU-inal%C3%A1mbricos-Cancelaci%C3%B3n-Auriculares-Desmontable/dp/B0CWNQP4RG" },
  { id: "xiaomi-redmi-buds", nombre: "Xiaomi Redmi Buds", tipo: "In-ear", categoria: "inear",
    desc: "Audífonos inalámbricos in-ear Xiaomi en negro, con estuche de carga.",
    destaca: "In-ear con estuche de carga", ideal: "Música y uso diario",
    imagen: "image/imagen6.png",
    url: "https://www.amazon.com.mx/Xiaomi-Aud%C3%ADfonos-Redmi-Buds-Black/dp/B0D9YYQ7X9" },
  { id: "jbl-tune-510bt", nombre: "JBL Tune 510BT", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos inalámbricos on-ear de JBL con diadema ajustable.",
    destaca: "On-ear Bluetooth de JBL", ideal: "Música y ejercicio",
    imagen: "image/imagen7.png",
    url: "https://www.amazon.com.mx/JBL-Tune-510BT-Ear-inal%C3%A1mbricos/dp/B08WM3LMJF" },
  { id: "good-happens", nombre: "Good Happens Supraaural", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos supraaurales inalámbricos con ecualizador, en color naranja.",
    destaca: "Supraaural con ecualizador", ideal: "Música y viajes",
    imagen: "image/imagen8.png",
    url: "https://www.amazon.com.mx/Good-Happens-supraaurales-reproducci%C3%B3n-ecualizadores/dp/B0F1NCH7GL" },
  { id: "billboard-lila", nombre: "Billboard Lila", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos inalámbricos over-ear en tono lila con controles en la copa.",
    destaca: "Over-ear inalámbrico en lila", ideal: "Música y estudio",
    imagen: "image/imagen9.png",
    url: "https://www.amazon.com.mx/dp/B0GTX3SYSY" },
  { id: "mokata", nombre: "Mokata Bicolor", tipo: "De diadema", categoria: "diadema",
    desc: "Audífonos de diadema ligera en azul marino y verde limón.",
    destaca: "Diadema ligera bicolor", ideal: "Estudio y uso diario",
    imagen: "image/imagen10.png",
    url: "https://www.amazon.com.mx/dp/B0F74PF7NQ" }
];

const porId = (id) => productos.find((p) => p.id === id);


let observador = null;
if ("IntersectionObserver" in window) {
  observador = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("visible"); observador.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
}
const revelar = () => {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    if (observador) { observador.observe(el); } else { el.classList.add("visible"); }
  });
};
revelar();


const barra = document.querySelector(".barra");
if (barra) {
  window.addEventListener("scroll", () => { barra.classList.toggle("sombra", window.scrollY > 10); });
}


const heroImg = document.getElementById("heroImg");
if (heroImg) {
  document.getElementById("hero").addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroImg.style.transform = "translate(" + x + "px," + y + "px)";
  });
}


document.querySelectorAll("[data-meta]").forEach((el) => {
  const meta = parseInt(el.dataset.meta);
  const paso = Math.max(1, Math.ceil(meta / 30));
  let n = 0;
  const reloj = setInterval(() => {
    n += paso;
    if (n >= meta) { n = meta; clearInterval(reloj); }
    el.textContent = n;
  }, 40);
});


const crearTarjeta = (p, i) => `
  <div class="producto reveal" style="--i:${i}" data-categoria="${p.categoria}">
    <a class="imagen-caja" href="${p.url}" target="_blank" rel="noopener">
      <img src="${p.imagen}" alt="${p.nombre}">
      <span class="overlay"><span>Ver en tienda ↗</span></span>
    </a>
    <div class="info">
      <span class="etiqueta">${p.tipo}</span>
      <h3>${p.nombre}</h3>
      <p>${p.desc}</p>
      <a class="boton" href="${p.url}" target="_blank" rel="noopener">Ver en tienda</a>
    </div>
  </div>`;

const mostrarProductos = (categoria) => {
  const cont = document.getElementById("gridProductos");
  if (!cont) return;
  const lista = categoria === "todos" ? productos : productos.filter((p) => p.categoria === categoria);
  cont.innerHTML = lista.map((p, i) => crearTarjeta(p, i)).join("");
  revelar();
  document.getElementById("contadorResultados").textContent = "Mostrando " + lista.length + " modelo(s)";
};

const llenarTabla = () => {
  const cuerpo = document.getElementById("cuerpoComparativa");
  if (!cuerpo) return;
  productos.forEach((p) => {
    const fila = document.createElement("tr");
    fila.innerHTML = "<td><strong>" + p.nombre + "</strong></td><td>" + p.tipo + "</td><td>" + p.destaca +
      "</td><td>" + p.ideal + '</td><td><a href="' + p.url + '" target="_blank" rel="noopener">Ver</a></td>';
    cuerpo.appendChild(fila);
  });
};

const filtros = document.getElementById("filtros");
if (filtros) {
  filtros.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      filtros.querySelectorAll("button").forEach((b) => { b.classList.remove("activo"); b.classList.add("secundario"); });
      btn.classList.add("activo");
      btn.classList.remove("secundario");
      mostrarProductos(btn.dataset.filtro);
    });
  });
  mostrarProductos("todos");
  llenarTabla();
}


const simBateria = document.getElementById("simBateria");
if (simBateria) {
  const calcularBateria = () => {
    const nominal = parseFloat(document.getElementById("horasNominales").value) || 0;
    const volumen = parseInt(document.getElementById("volumen").value);
    const usoDiario = parseFloat(document.getElementById("usoDiario").value) || 1;
    const anc = document.getElementById("anc").value === "si";

    document.getElementById("valVolumen").textContent = volumen + "%";


    let horas = nominal * (1 - 0.4 * (volumen / 100));
    if (anc) { horas = horas * 0.8; }


    let restante = horas;
    let dias = 0;
    while (restante > 0) {
      restante = restante - usoDiario;
      dias++;
    }

    document.getElementById("resHoras").textContent = horas.toFixed(1) + " h";
    document.getElementById("resDias").textContent = dias;
    const porcentaje = nominal > 0 ? Math.min(100, (horas / nominal) * 100) : 0;
    document.getElementById("barraBateria").style.width = porcentaje + "%";
  };
  ["horasNominales", "volumen", "usoDiario", "anc"].forEach((id) => {
    document.getElementById(id).addEventListener("input", calcularBateria);
  });
  calcularBateria();
}


const btnReproducir = document.getElementById("btnReproducir");
if (btnReproducir) {
  let ctxAudio = null, osc = null, graves = null, medios = null, agudos = null, ganancia = null;
  let analizador = null, temporizador = null, animacion = null;
  const notas = [261.63, 329.63, 392.0, 523.25, 392.0, 329.63];

  const valor = (id) => parseInt(document.getElementById(id).value);

  const aplicarEq = () => {
    document.getElementById("valGraves").textContent = valor("eqGraves") + " dB";
    document.getElementById("valMedios").textContent = valor("eqMedios") + " dB";
    document.getElementById("valAgudos").textContent = valor("eqAgudos") + " dB";
    document.getElementById("valEqVolumen").textContent = valor("eqVolumen") + "%";
    if (ctxAudio) {
      graves.gain.value = valor("eqGraves");
      medios.gain.value = valor("eqMedios");
      agudos.gain.value = valor("eqAgudos");
      ganancia.gain.value = (valor("eqVolumen") / 100) * 0.2;
    }
  };

  const dibujar = () => {
    const canvas = document.getElementById("visualizador");
    const c = canvas.getContext("2d");
    const datos = new Uint8Array(analizador.frequencyBinCount);
    const pintar = () => {
      analizador.getByteFrequencyData(datos);
      c.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / datos.length;
      datos.forEach((d, i) => {
        const alto = (d / 255) * canvas.height;
        c.fillStyle = i % 2 === 0 ? "#ff5a1f" : "#ffb400";
        c.fillRect(i * ancho, canvas.height - alto, ancho - 2, alto);
      });
      animacion = requestAnimationFrame(pintar);
    };
    pintar();
  };

  let audioEl = null, urlCancion = null;


  const obtenerCancion = async (modo) => {
    if (modo === "archivo") {
      const archivo = document.getElementById("archivoAudio").files[0];
      if (!archivo) { throw new Error("Primero elige un archivo de audio."); }
      return URL.createObjectURL(archivo);
    }

    const resp = await fetch("audio/cancion.mp4");
    if (!resp.ok) { throw new Error("No se encontró audio/cancion.mp4."); }
    return URL.createObjectURL(await resp.blob());
  };

  const iniciar = async () => {
    const estado = document.getElementById("estadoAudio");
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { estado.textContent = "Tu navegador no soporta Web Audio."; return; }
    const modo = document.getElementById("fuenteAudio").value;


    if (modo !== "tono") {
      try {
        estado.textContent = "Cargando canción...";
        urlCancion = await obtenerCancion(modo);
      } catch (e) {
        estado.textContent = e.message + " Si abres el sitio como archivo, usa 'Elegir archivo de mi equipo'.";
        return;
      }
    }

    ctxAudio = new AC();
    graves = ctxAudio.createBiquadFilter(); graves.type = "lowshelf"; graves.frequency.value = 200;
    medios = ctxAudio.createBiquadFilter(); medios.type = "peaking"; medios.frequency.value = 1000; medios.Q.value = 1;
    agudos = ctxAudio.createBiquadFilter(); agudos.type = "highshelf"; agudos.frequency.value = 3500;
    ganancia = ctxAudio.createGain();
    analizador = ctxAudio.createAnalyser();
    analizador.fftSize = 128;
    graves.connect(medios); medios.connect(agudos);
    agudos.connect(ganancia); ganancia.connect(analizador); analizador.connect(ctxAudio.destination);


    if (modo === "tono") {
      osc = ctxAudio.createOscillator();
      osc.type = "sawtooth";
      osc.connect(graves);
      osc.frequency.value = notas[0];
      osc.start();
      let i = 0;
      temporizador = setInterval(() => {
        i++;
        osc.frequency.setValueAtTime(notas[i % notas.length], ctxAudio.currentTime);
      }, 350);
      aplicarEq();
      estado.textContent = "Reproduciendo tono de prueba...";
    } else {
      audioEl = new Audio(urlCancion);
      audioEl.loop = true;
      const fuenteCancion = ctxAudio.createMediaElementSource(audioEl);
      fuenteCancion.connect(graves);
      aplicarEq();
      try { await audioEl.play(); }
      catch (e) { estado.textContent = "No se pudo reproducir este archivo."; detener(); return; }
      estado.textContent = "Reproduciendo tu canción...";
    }
    dibujar();
    btnReproducir.textContent = "Detener";
  };

  const detener = () => {
    clearInterval(temporizador);
    cancelAnimationFrame(animacion);
    if (osc) { try { osc.stop(); } catch (e) {} osc = null; }
    if (audioEl) { audioEl.pause(); audioEl = null; }
    if (urlCancion) { URL.revokeObjectURL(urlCancion); urlCancion = null; }
    if (ctxAudio) { ctxAudio.close(); ctxAudio = null; }
    btnReproducir.textContent = "Reproducir";
    document.getElementById("estadoAudio").textContent = "Detenido";
    const canvas = document.getElementById("visualizador");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  };


  document.getElementById("fuenteAudio").addEventListener("change", (e) => {
    document.getElementById("campoArchivo").style.display = e.target.value === "archivo" ? "block" : "none";
  });

  btnReproducir.addEventListener("click", () => { ctxAudio ? detener() : iniciar(); });
  ["eqGraves", "eqMedios", "eqAgudos", "eqVolumen"].forEach((id) => {
    document.getElementById(id).addEventListener("input", aplicarEq);
  });

  // Presets con switch
  document.querySelectorAll("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      let g = 0, m = 0, a = 0;
      switch (btn.dataset.preset) {
        case "bass": g = 10; m = -2; a = 0; break;
        case "vocal": g = -3; m = 8; a = 2; break;
        case "brillante": g = -2; m = 0; a = 10; break;
        default: g = 0; m = 0; a = 0; break;
      }
      document.getElementById("eqGraves").value = g;
      document.getElementById("eqMedios").value = m;
      document.getElementById("eqAgudos").value = a;
      aplicarEq();
    });
  });
  aplicarEq();
}


const btnRecomendar = document.getElementById("btnRecomendar");
if (btnRecomendar) {
  const recomendar = (uso, formato) => {
    let id = "";
    let motivo = "";
    if (formato === "inear") {
      if (uso === "ejercicio") { id = "ugreen-clip"; motivo = "El diseño abierto con clip se mantiene en su lugar y es cómodo para moverte."; }
      else {
        if (uso === "musica") { id = "xiaomi-redmi-buds"; motivo = "Un in-ear con estuche de carga, práctico para tu música diaria."; }
        else { id = "xiaomi-buds-play"; motivo = "In-ear sencillo y portátil para llevar a todos lados."; }
      }
    } else {
      if (uso === "ejercicio") { id = "jbl-tune-510bt"; motivo = "On-ear de JBL con diadema ajustable, ligero para entrenar."; }
      else {
        if (uso === "musica") { id = "sony-wh-ch520"; motivo = "On-ear de Sony con gran duración de batería para escuchar sin pausas."; }
        else {
          if (uso === "trabajo") { id = "haylou-anc"; motivo = "Cancelación de ruido y micrófono para concentrarte en videollamadas."; }
          else { id = "good-happens"; motivo = "Supraaural con ecualizador, cómodo para viajes largos."; }
        }
      }
    }
    return { producto: porId(id), motivo: motivo };
  };

  btnRecomendar.addEventListener("click", () => {
    const r = recomendar(document.getElementById("quizUso").value, document.getElementById("quizFormato").value);
    const p = r.producto;
    document.getElementById("resultadoQuiz").innerHTML = `
      <div class="recomendado">
        <a class="imagen-caja" href="${p.url}" target="_blank" rel="noopener"><img src="${p.imagen}" alt="${p.nombre}"><span class="overlay"><span>Ver ↗</span></span></a>
        <div>
          <h3>Te recomendamos: ${p.nombre}</h3>
          <p>${r.motivo}</p>
          <a class="boton" href="${p.url}" target="_blank" rel="noopener">Ver en tienda</a>
        </div>
      </div>`;
  });
}
