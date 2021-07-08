addEventListener("load", load);
//llamo al servidor
var servidor = "https://backendpruebaedi.herokuapp.com/peliculas";
var serviDelete = "https://backendpruebaedi.herokuapp.com/eliminarpelicula";

function $(demo){
    return document.getElementById(demo);
}



function load(){
    enviarMensajeAlServidor(servidor , cargarPeliculas);

}

function cargarPeliculas(valor) {

    var peliculas = JSON.parse(valor);
    var todo=[];
    peliculas.forEach(element => {
        todo.push('<div class="col-md-3"  style="padding:1%;">'+
                      '<div class="card" style="width: 12.5rem;background:#212121;color:white">'+
                        '<img src="'+element.imagen+'" class="card-img-top">'+
                        '<p><i class="fas fa-star"></i>'+element.puntaje+'</p>'+
                        '<div class="card-body" style="height:180px">'+
                           '<p align="center" class="card-text">'+element.titulo+'</p>'+
                           '<input class="form-control" type="text" id="id_pelicula" name="id_pelicula" value="'+element.id_pelicula+'" hidden>'+
                           '<a style="float: left;margin: 5px;border-radius:30px" href="modificarpeliculas.html" id="modificar" class="btn btn-dark"><i class="fas fa-pencil-alt"></i></a>'+
                           '<a style="text-decoration:underline;cursor:pointer; float: left;margin-right:5px;border-radius:30px;margin-top: 2%" class="btn btn-light card-text" href="#" onclick="eliminarDato()"><i class="fas fa-trash-alt"></i></a>'+
                        '</div>'+
                      '</div>'+
                  '</div>'

                 );
 
    });
    $('peliculas').innerHTML=todo;
    
    
}
function eliminarDato(){
    var eliminar = confirm('De verdad desea eliminar este dato?');


    if ( eliminar ) {
          enviarMensajeAlServidorPost(serviDelete,retorno);
          function enviarMensajeAlServidorPost(serviDelete, funcionARealizar) {

            //declaro el objeto
            var xmlhttp = new XMLHttpRequest();
            var datos = new FormData();
            datos.append("id_pelicula",$("id_pelicula").value);
        
            // indico hacia donde va el mensaje
            xmlhttp.open("POST", serviDelete, true);
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
        function retorno(respuesta){
            alert(respuesta);
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

