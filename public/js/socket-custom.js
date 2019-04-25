var socket = io();

//on -> escuchar información
socket.on('connect', function() {
    console.log('Conectado con el servidor');
});

socket.on('disconect', function() {
    console.log('Perdimos Conexion con el servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})

//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Manuel',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp)
})