addEventListener("load", load);
//llamo al servidor

var FormMod = "https://backendpruebaedi.herokuapp.com/ModPelicula";

function $(demo){
    return document.getElementById(demo);
}



function load(){
    //enviarMensajeAlServidor(FormMod , cargarPeliculas);
    alert("hola");

}
function cargarPeliculas(valor) {

    alert(valor);
    
    
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