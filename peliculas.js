addEventListener("load", load);
//llamo al servidor
var servidor = "https://backendpruebaedi.herokuapp.com/peliculas";
//var servi = "localhost:444/login";

function $(demo){
    return document.getElementById(demo);
}



function load(){
    enviarMensajeAlServidor(servidor , cargarPeliculas);
    //$("peliculas").addEventListener("change", mostrarPeliculas);
    //$("#peliculas").innerHTML=$("peliculas").value;


}

/*function mostrarPeliculas() {
    var valorPelicula = $("peliculas").value;
    
    document.getElementById('peliculas').innerHTML=valorPelicula;
}*/
function cargarPeliculas(valor) {
    alert(valor);
   /* peliculas.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = []

    peliculas.forEach(element => {
        opciones.push(element.nombre);
    });

    $("peliculas").innerHTML = opciones;
    var titulo=document.getElementById('peliculas');
    titulo.innerHTML="hola";*/
    
    
}

function enviarMensajeAlServidor(servidor, funcionARealizar){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET",servidor,true);
   
    xmlhttp.onreadystatechange = function(){

        if(xmlhttp.readyState == XMLHttpRequest.DONE){
            if(xmlhttp.status == 200){
                console.log(xmlhttp.response);
                funcionARealizar(xmlhttp.responseText);
            }else{
                alert("Ocurrio un error");
            }
        }

    }
    xmlhttp.send();    
}




function enviarMensajeAlServidorPost(servidor, funcionARealizar) {

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



/*function cargarOpcionesPeliculas(valor) {
    var peliculas = JSON.parse(valor);
    peliculas.sort(function (x, y) { return x.nombre.localeCompare(y.nombre) });
    var opciones = ['<option value=0>Selecciones una pelicula</option>']

    pelicula.forEach(element => {
        opciones.push('<option value="' + element.valor + '">' + element.nombre + '</option>');
    });

    document.getElementById('peliculas').innerHTML = opciones;
}*/