
const clasesProfesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
};

window.clasesProfesores = clasesProfesores

console.log(clasesProfesores);


class ClasePociones {
    constructor(profesor, horario, ingredientes, tiempoPreparacion) {
        this.profesor = profesor;
        this.horario = horario;
        this.ingredientes = ingredientes;
        this.tiempoPreparacion = tiempoPreparacion;
        this.pocionRealizada = false;
    }

    prepararPocion() {
        document.getElementById("tituloClase").innerText = "Comenzando la preparación de la Poción Felix Felicis..."
        document.getElementById("profesorActual").innerText = "El profesor ahora es "+ this.profesor

        setTimeout(() => {
            if (this.verificarIngredientes() && this.verificarTiempo()) {
                document.getElementById("tituloClase").innerText = "¡Poción Felix Felicis preparada con éxito!"
                // console.log(`¡Poción Felix Felicis preparada con éxito!`);
                this.pocionRealizada = true;
                this.cambiarProfesor();
            } else {
                document.getElementById("tituloClase").innerText = "Error en la preparación de la poción. Ingredientes insuficientes o tiempo agotado."
            }
        }, 3000);

    }


    verificarIngredientes() {
        const crisopos = this.ingredientes.crisopos || 0;
        const talloDescurainia = this.ingredientes.talloDescurainia || 0;

        return crisopos >= 2 && talloDescurainia >= 1;
    }


    verificarTiempo() {
        return this.tiempoPreparacion <= 5;
    }


    cambiarProfesor() {
        this.profesor = "Profesor David Filch";
        document.getElementById("profesorActual").innerText = "El profesor ahora es "+ this.profesor
    }
}

const clasePociones = new ClasePociones(
    "Profesor Liliana McGonagall",
    "10:00 AM - 11:30 AM",
    { crisopos: 2, talloDescurainia: 1 },
    5
);
clasePociones.prepararPocion();

