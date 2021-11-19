const sonido = document.getElementById('sonido');

document.addEventListener('keywown', function(evento){
if (evento.keyCode == 32) {
sonido.innerHTML = '<audio src="within.ogg" autoplay></audio>';
}

})