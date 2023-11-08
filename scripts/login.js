document.addEventListener('DOMContentLoaded', function() {
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const iniciarSesionButton = document.getElementById('boton');

    

   
        iniciarSesionButton.addEventListener('click', function() {
            const usuario = usuarioInput.value.trim();
            const contrasena = contrasenaInput.value.trim();
            if (usuario !== '' && contrasena !== ''){
                alert('Has iniciado sesión');
                console.log(usuario + '' + contrasena )
            }else{
                
                console.log("No entro")
            }
        });
    
});
