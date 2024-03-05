const animalPatronus = ["Ratón", "Cisne", "Cabra", "Fénix", "Zorro"];

let defensaContraLasArtesOscuras = {
  animalPatronus:""
};


function obtenerAnimal() {
    defensaContraLasArtesOscuras.animalPatronus =  animalPatronus[Math.floor(Math.random() * animalPatronus.length)]
    document.getElementById("animalPatronus").innerText = "el animal patronus es: " +defensaContraLasArtesOscuras.animalPatronus
}

function aparecerDementor() {
    if (defensaContraLasArtesOscuras.animalPatronus == ""){
        document.getElementById("estadoEstudiante").innerText = "será absorbido"
    }else{
        document.getElementById("estadoEstudiante").innerText = "detiene al dementor"

    }
}
