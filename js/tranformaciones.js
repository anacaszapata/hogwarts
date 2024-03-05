const clasesProfesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};
const boggartEjemplo = {
    nombre: "Remus Lupin",
    formaOriginal: "lobo"
}


const claseTransformaciones = {
    profesor: clasesProfesores.transformaciones,
    horario: "2:00pm",
    boggartTransformador: null,
    realizarTransformacionRiddikulus: function () {
        if (this.boggartTransformador === null) {
            console.log("Un boggart apareciò en clase de transformaciones!!!");
            console.log("Riddikulus¡");
            document.getElementById("message").innerHTML = "Un boggart apareciò en clase de transformaciones!!!"
            document.getElementById("encantamiento").innerHTML = "Riddikulus¡"
        } else {
            console.log("no hay un boggart presente");
        }
    },
    enfrentarBoggart: function (boggart) {
        console.log(`Transormacion de ${boggart.nombre} en ${boggart.formaOriginal}`);
    },
};

function aparecerBoggart() {
    claseTransformaciones.realizarTransformacionRiddikulus()
    claseTransformaciones.enfrentarBoggart(boggartEjemplo)
}
