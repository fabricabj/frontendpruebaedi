addEventListener("load", load);
//llamo al servidor
var servidor = "https://backendpruebaedi.herokuapp.com/peliculas";
var serviDelete = "https://backendpruebaedi.herokuapp.com/eliminarpelicula";
var serviFormMod = "https://backendpruebaedi.herokuapp.com/FormModPelicula";

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
                           '<button type="submit" style="float: left;margin: 5px;border-radius:30px"  id="modificar" class="btn btn-dark" onclick="formMod('+element.id_pelicula+')"><i class="fas fa-pencil-alt"></i></a>'+
                           '<button type="submit" style="text-decoration:underline;cursor:pointer; float: left;margin-right:5px;border-radius:30px;margin-top: 2%" class="btn btn-light card-text" onclick="eliminarDato('+element.id_pelicula+')"><i class="fas fa-trash-alt"></i></button>'+
                        '</div>'+
                      '</div>'+
                  '</div>'

                 );
                 
 
    });
    $('peliculas').innerHTML=todo;
    
    
}
function eliminarDato(id){
    var eliminar = confirm('De verdad desea eliminar este dato?');


    if ( eliminar ) {
          
        var xmlhttp = new XMLHttpRequest();
        var datos = new FormData();
        datos.append("id_pelicula",id);
    
        // indico hacia donde va el mensaje
        xmlhttp.open("POST", serviDelete, true);
        //seteo el evento
        xmlhttp.onreadystatechange = function () {
            //Veo si llego la respuesta del servidor
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                //Reviso si la respuesta es correcta
                if (xmlhttp.status == 200) {
                    alert("eliminado");
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
function formMod(id){
    enviarMensajeAlServidorPost(serviFormMod,retornoDelClick);



    function retornoDelClick(respuesta){
        $('peliculas').hidden=true;
      
        var peliculas = JSON.parse(respuesta);
        var todo=[];
        peliculas.forEach(element => {
        todo.push('<div class="col-md-12">'+
                        '<div class="form-row">'+
                            '<div class="form-group col-md-8">'+
                                '<label for="inputEmail4">Titulo</label>'+
                                '<input type="text" class="form-control" name="titulo" id="titulo" value="'+element.titulo+'">'+
                             '</div>'+
                             '<div class="form-group col-md-4">'+
                                 '<label for="inputPassword4">año</label>'+
                                 '<input type="text" class="form-control" name="anio" id="anio" value="'+element.anio+'">'+
                             '</div>'+
                        '</div>'+
                        '<div class="form-row">'+
                            '<div class="form-group col-md-8">'+
                                '<label for="inputPassword4">Duracion</label>'+
                                '<input type="text" class="form-control" name="duracion" id="duracion" value="'+element.duracion+'">'+
                            '</div>'+
                            '<div class="form-group col-md-4">'+
                                '<label for="inputPassword4">Puntaje</label>'+
                                '<input type="text" class="form-control" name="puntaje" id="puntaje" value="'+element.puntaje+'">'+
                            '</div>'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label for="inputEmail4">imagen</label>'+
                            '<input type="text" class="form-control" name="imagen" id="imagen" value="'+element.imagen+'">'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label for="inputEmail4">trailer</label>'+
                            '<input type="text" class="form-control" name="trailer" id="trailer" value="'+element.trailer+'">'+
                        '</div>'+
                        '<div class="form-group">'+
                            '<label for="inputEmail4">Descripcion</label>'+
                            '<textarea type="text" class="form-control" name="descripcion" id="descripcion" value="'+element.descripcion+'"></textarea>'+
                        '</div>'+
                        '<div class="form-group">'+
                           '<button type="submit" name="modificar" id="modificar" class="btn btn-dark" onclick="modificarDato('+element.id_pelicula+')">Modificar</button>'+
                        '</div>'+
                '</div>'
                 );
                 
 
    });
    
    $('form').innerHTML=todo;
    //window.location="ModificarPelicula.html";
    }

    function enviarMensajeAlServidorPost(serviFormMod, funcionARealizar){
        var xmlhttp = new XMLHttpRequest();
        var datos = new FormData();
        datos.append("id_pelicula",id);
    
        // indico hacia donde va el mensaje
        xmlhttp.open("POST", serviFormMod, true);
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

