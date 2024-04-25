function calcularResultado() {
    var color = document.getElementById('colorInput').value.toLowerCase();
    var comida = document.getElementById('comidaInput').value.toLowerCase();
    var chismoso = document.getElementById('chismosoInput').value.toLowerCase();
    var lloron = document.getElementById('lloronInput').value.toLowerCase();
    var chistos = document.getElementById('chistosInput').value.toLowerCase();

    var respuestasCorrectas = 0;
    var totalPreguntas = 5; // Cambiar esto al número total de preguntas

    if (color === 'negro') respuestasCorrectas++;
    if (comida === 'pizza' || comida === 'baleadas') respuestasCorrectas++;
    if (chismoso === 'cinthya') respuestasCorrectas++;
    if (lloron === 'andy') respuestasCorrectas++;
    if (chistos === 'andy') respuestasCorrectas++;

    var porcentaje = (respuestasCorrectas / totalPreguntas) * 100;

    if (porcentaje >= 60) {
        document.getElementById('mensajeResultado').innerText = ' Tu porcentaje de respuestas correctas es: ' + porcentaje.toFixed(2) + '%' + '¡Feliz Aniversario!'  ;
    } else {
        document.getElementById('mensajeResultado').innerText = ' Tu porcentaje de respuestas correctas es: ' + porcentaje.toFixed(2) + '%' + '¡Casi! ¡Pero aún así, feliz aniversario!';
    }

    document.getElementById('preguntas').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
}
