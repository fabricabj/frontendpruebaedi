addEventListener("load", load);
//llamo al servidor
var servidor = "https://backendpruebaedi.herokuapp.com/peliculas";
//var servi = "localhost:444/login";

function $(demo){
    return document.getElementById(demo);
}



    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET",servidor);
   
    xmlhttp.onload = function () {
            if(xmlhttp.status == 200){
                var pelis = JSON.parse(xmlhttp.responseText);
                var template = ``;
                pelis.sort(function (x, y) { return x.peliculas.localeCompare(y.peliculas) });
                     template +=`
                     <p>_______________________________________  </p>
                     <h3>${peliculas.titulo}</h3>
                     `;

              
                console.log("hola");
                //document.getElementById('peliculas').innerHTML="hola";
            }else{
                alert("Ocurrio un error");
            }
        }
    

   




/*function enviarMensajeAlServidorPost(servidor, funcionARealizar) {

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();
    var datos = new FormData();
    datos.append("nombre",$("usuario").value);
    datos.append("contrasena",$("contrasenia").value);
    var usuario=document.getElementById('usuario').value;
    var contrasenia=document.getElementById('contrasenia').value;
    var msg="llenar los siguientes campos que estan vacios:\n";
    var ok=true;
    if(usuario==""){
        msg+="Usuario\n";
        ok=false;
    }
    if(contrasenia==""){
        msg+="contraseña\n";
        ok=false;
    }
    if(ok==false){
        alert(msg);
    }else{

    // indico hacia donde va el mensaje
    xmlhttp.open("POST", servidor, true);
    //seteo el evento
    xmlhttp.onreadystatechange = function () {
        //Veo si llego la respuesta del servidor
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            //Reviso si la respuesta es correcta
            if (xmlhttp.status == 200) {
                funcionARealizar(xmlhttp.responseText);
            }
            else {
                alert("ocurrio un error");
            }
        }
    
    }

   
    xmlhttp.setRequestHeader("enctype", "multipart/form-data");

    //envio el mensaje    
    xmlhttp.send(datos);
    } 
}



function cargarOpcionesPeliculas(valor) {
    var peliculas = JSON.parse(valor);
    peliculas.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = ['<option value=0>Selecciones una pelicula</option>']

    pelicula.forEach(element => {
        opciones.push('<option value="' + element.valor + '">' + element.nombre + '</option>');
    });

    document.getElementById('peliculas').innerHTML = opciones;
}*/