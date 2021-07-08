addEventListener("load", load);
//llamo al servidor
var servidor = "https://backendpruebaedi.herokuapp.com/peliculas";
//var servi = "localhost:444/login";

function $(demo){
    return document.getElementById(demo);
}



function load(){
    enviarMensajeAlServidor(servidor , cargarPeliculas);

}

function cargarPeliculas(valor) {

    var peliculas = JSON.parse(valor);
    //peliculas.sort(function (x, y) { return x.titulo.localeCompare(y.titulo); return x.imagen.localeCompare(y.imagen);return x.puntaje.localeCompare(y.puntaje)});
    var todo=[];
    peliculas.forEach(element => {
        todo.push('<div class="col-md-3">'+
                      '<div class="card" style="width: 12.5rem;background:#212121;color:white">'+
                        '<img src="'+element.imagen+'" class="card-img-top">'+
                        '<p><i class="fas fa-star"></i>'+element.puntaje+'</p>'+
                        '<div class="card-body" style="height:150px">'+
                           '<p align="center" class="card-text">'+element.titulo+'</p>'+
                           '<input class="form-control" type="text" id="id_pelicula" name="id_pelicula" value="'+element.id_pelicula+'" hidden>'+
                           '<a style="float: left;margin: 5px;border-radius:30px" href="modificarpeliculas.html" id="modificar" class="btn btn-dark"><i class="fas fa-pencil-alt"></i></a>'+
                           '<a style="text-decoration:underline;cursor:pointer; float: left;margin-right:5px;border-radius:30px;margin-top: 2%" class="btn btn-light card-text" href="#" onclick="eliminarDato('+element.id_pelicula+')"><i class="fas fa-trash-alt"></i></a>'+
                        '</div>'+
                      '</div>'+
                  '</div>'

                 );
                 
                
        
    });
    //alert(opciones);
    $('peliculas').innerHTML=todo;
    
    
}
function eliminarDato(idPelicula){
    var eliminar = confirm('De verdad desea eliminar este dato?');
    var eliminarProducto=document.getElementById('eliminarProducto').value;

    if ( eliminar ) {
          alert(idPelicula);
    }
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
