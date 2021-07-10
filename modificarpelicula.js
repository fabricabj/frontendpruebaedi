addEventListener("load", load);
//llamo al servidor

var FormMod = "https://backendpruebaedi.herokuapp.com/ModPelicula";

function $(demo){
    return document.getElementById(demo);
}



function load(){
    enviarMensajeAlServidor(FormMod , cargarPeliculas);

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
    $('form').innerHTML=todo;
    
    
}
function enviarMensajeAlServidor(FormMod, funcionARealizar){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.open("GET",FormMod,true);
   
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