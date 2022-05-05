var bienvedida = "Bienvenido al Juego Piedra, Papel o Tijera!";
var valorMaquina = "tijera"; 
var valorElegido;

valorElegido = prompt(bienvedida + '\nIngrese la palabra "piedra" o "papel" o "tijera"');

if(valorElegido == valorMaquina) {

    alert('La máquina eligió '+valorMaquina+', es un empate!');

} else if(valorElegido == 'papel' && valorMaquina == 'piedra') {
    
    alert('Le ganaste a la máquina que eligió '+valorMaquina+'! Felicitaciones!');

} else if(valorElegido == 'papel' && valorMaquina == 'tijera'){
    
    alert('La máquina ha ganado con '+valorMaquina+'! Lo siento mucho!');

} else if(valorElegido == 'piedra' && valorMaquina == 'tijera') {
    
    alert('Le ganaste a la máquina que eligió '+valorMaquina+'! Felicitaciones!');

} else if(valorElegido == 'piedra' && valorMaquina == 'papel') {
    
    alert('La máquina ha ganado con '+valorMaquina+'! Lo siento mucho!');

} else if(valorElegido == 'tijera' && valorMaquina == 'papel') {
    
    alert('Le ganaste a la máquina que eligió '+valorMaquina+'! Felicitaciones!');

} else if(valorElegido == 'tijera' && valorMaquina == 'piedra'){
    
    alert('La máquina ha ganado con '+valorMaquina+'! Lo siento mucho!');

} else {
    
    alert ('Lo siento hubo un error, vuelva a intentarlo por favor!')

}