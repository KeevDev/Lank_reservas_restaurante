document.addEventListener('DOMContentLoaded', function() {
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const iniciarSesionButton = document.getElementById('boton');

    
    
    function abrirOtraPagina() {
        // Especifica la URL de la otra página que quieres abrir
        var otraPaginaURL = '../pages/api.html';

        // Abre la otra página en una nueva ventana o pestaña
        window.open(otraPaginaURL, '');
    }
        iniciarSesionButton.addEventListener('click', function() {
            const usuario = usuarioInput.value.trim();
            const contrasena = contrasenaInput.value.trim();
            var miVariable = usuarioInput.value;
            window.location.href = '../pages/api.html?variable=' + encodeURIComponent(miVariable);
            if (usuario !== '' && contrasena !== ''){
                alert('Has iniciado sesión');
                abrirOtraPagina();
                console.log(usuario + '' + contrasena )
            }else{
                
                console.log("No entro")
            }
        });
    
});
