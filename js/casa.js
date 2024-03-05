let estudianteHogwarts = {
  nombre: "",
  edad: 0,
  familia: {
    madre: "",
    padre: "",
  },
  linaje: "",
  casa: "",
  animalPatronus: "",
  cualidades: [],
};

let casas = {
  Gryffindor: "./assets/Gryffindor.jpeg",
  Hufflepuff: "./assets/Hufflepuff.jpeg",
  Ravenclaw: "./assets/Ravenclaw.jpeg",
  Slytherin: "./assets/Slytherin.jpeg",
};

function ejecutarSeleccionCasa() {
  asinarValores();

  asignarCasa(estudianteHogwarts);
  setTimeout(() => {
    let contenedor = document.getElementById("container-house");
    contenedor.style.display = "none";
    mostrarValores()
    document.getElementById("infoEstudiante").style.display = ""
  }, 3000);
}

function asinarValores() {
  const parametrosURL = new URLSearchParams(window.location.search);
  estudianteHogwarts.nombre = parametrosURL.get("nombre");
  estudianteHogwarts.edad = parametrosURL.get("edad");
  estudianteHogwarts.familia.madre = parametrosURL.get("nombreMadre");
  estudianteHogwarts.familia.padre = parametrosURL.get("nombrePadre");
  estudianteHogwarts.linaje = parametrosURL.get("linaje");
  estudianteHogwarts.animalPatronus = parametrosURL.get("animalPatronus");
  estudianteHogwarts.cualidades = parametrosURL.getAll("cualidades[]");
}
function asignarCasa() {
  const condicionesGryffindor = {
    cualidades: ["Valor", "fuerza", "audacia"],
    linaje: ["Mestizo", "muggle", "Sangre pura"],
  };
  const condcionesHufflepuff = {
    cualidades: ["Justicia", "Lealtad", "Paciencia"],
    linaje: ["Mestizo", "muggle"],
  };
  const condicionesRavenclaw = {
    cualidades: ["Creatividad", "Erudicion", "Inteligencia"],
    linaje: ["Mestizo", "muggle", "Sangre pura"],
  };
  const condicionesSlytherin = {
    cualidades: ["Ambicion", "Determinacion", "Astucia"],
    linaje: ["Sangre pura"],
  };

  const cualidades = estudianteHogwarts.cualidades;

  for (let i = 0; i < cualidades.length; i++) {
    let cualidad = cualidades[i];

    if (
      condicionesGryffindor.cualidades.includes(cualidad) &&
      condicionesGryffindor.linaje.includes(estudianteHogwarts.linaje)
    ) {
      estudianteHogwarts.casa = "Gryffindor";
    }
    if (
      condcionesHufflepuff.cualidades.includes(cualidad) &&
      condcionesHufflepuff.linaje.includes(estudianteHogwarts.linaje)
    ) {
      estudianteHogwarts.casa = "Hufflepuff";
    }
    if (
      condicionesRavenclaw.cualidades.includes(cualidad) &&
      condicionesRavenclaw.linaje.includes(estudianteHogwarts.linaje)
    ) {
      estudianteHogwarts.casa = "Ravenclaw";
    }
    if (
      condicionesSlytherin.cualidades.includes(cualidad) &&
      condicionesSlytherin.linaje.includes(estudianteHogwarts.linaje)
    ) {
      estudianteHogwarts.casa = "Slytherin";
    }
  }
}

ejecutarSeleccionCasa();

function mostrarValores() {
  document.getElementById("logoCasaEstudiante").src = casas[estudianteHogwarts.casa]
  document.getElementById("nombreEstudiante").innerText = "Nombre: " + estudianteHogwarts.nombre
  document.getElementById("edadEstudiante").innerText = "Edad: " + estudianteHogwarts.edad
  document.getElementById("linajeEstudiante").innerText = "Linaje: " + estudianteHogwarts.linaje
}

window.estudianteHogwarts = estudianteHogwarts;



