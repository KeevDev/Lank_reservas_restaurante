document.addEventListener('DOMContentLoaded', function() {
    const usuarioInput = document.getElementById('usuario');
    const contrasenaInput = document.getElementById('contrasena');
    const iniciarSesionButton = document.getElementById('boton');

    const administradores = { 
        "Laura" : "123*",
        "Kev" : "0000",
        "Nata" : "456*"
    };

    function abrirUsuario(usuario) {
        var pagina = '../pages/api.html';
        window.open(`${pagina}?user=${encodeURIComponent(usuario)}`, '');    
    }

    function abrirAdmin(usuario) {
        var pagina = '../pages/admin.html';
        window.open(`${pagina}?user=${encodeURIComponent(usuario)}`, '');
    }
    

    function esAdmin(usuario, contrasena){
        for (var user in administradores) {
            if (usuario === user && contrasena === administradores[user]){
                return true;
            }     
        }
        return false;
    }

    iniciarSesionButton.addEventListener('click', function() {
        const usuario = usuarioInput.value.trim();
        const contrasena = contrasenaInput.value.trim();

        if (esAdmin(usuario, contrasena)){
            alert('Iniciaste sesión como administrador');
            abrirAdmin(usuario);
        } else if (usuario !== '' && contrasena !== ''){
            alert('Has iniciado sesión');
            abrirUsuario(usuario);
            console.log(usuario + ' ' + contrasena );
        } else {
            console.log("No entro");
        }
    });
});