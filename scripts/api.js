var urlParams = new URLSearchParams(window.location.search);
var miVariableRecuperada = urlParams.get('variable');


function cargarJSON(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'api.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

function actualizarYGuardarJSON() {
    cargarJSON(function(response) {
        // Parsear el JSON
        var miJson = JSON.parse(response);
        var user = miVariableRecuperada;
        var count = document.getElementById("count_personas").value;
        var opcion = document.getElementById("opcion").value;
        var fecha = document.getElementById("fecha").value;
        var hora = document.getElementById("hora").value;

        // Actualizar los valores del objeto JSON
        if (count != '' && opcion != '' && fecha != '' && hora != ''){
            miJson.user = user;  // Cambié esto de count a user ya que parecía un error
            miJson.numero_personas = count;
            miJson.tipo_reserva = opcion;
            miJson.fecha = fecha;
            miJson.hora = hora;

        // Convertir el objeto JSON actualizado a una cadena JSON
            var jsonActualizado = JSON.stringify(miJson);
            console.log(jsonActualizado);
            alert("Reserva hecha con exito");
        }else{
            alert("Debe llenar todos los campos");
        }
        
        
    });
}

              
            
        