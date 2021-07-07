addEventListener("load", load);

var servidor = "https://backendpruebaedi.herokuapp.com/peliculas/alta";


function $(demo){
    return document.getElementById(demo);
}

function load() {
    document.getElementById("guardar").addEventListener("click", click);
     
}
 function click(){
    enviarMensajeAlServidorPost(servidor, retornoDelClick);
 }
 function retornoDelClick(respuesta){
        alert(respuesta);  
}
 
function enviarMensajeAlServidorPost(servidor, funcionARealizar){
 
     var xmlhttp = new XMLHttpRequest();
     var obje = new FormData();
     obje.append("titulo",$("titulo").value);
     obje.append("anio",$("anio").value);
     obje.append("duracion",$("duracion").value);
     obje.append("puntaje",$("puntaje").value);
     obje.append("imagen",$("imagen").value);
     obje.append("trailer",$("trailer").value);
     obje.append("descripcion",$("descripcion").value);
    
     var msg="falta ingresar datos en \n";
     var ok=true;

     if($('titulo').value==""){
         msg+="Titulo\n";
         ok=false;
     }
     if($('duracion').value==""){
        msg+="Duracion\n";
        ok=false;
     }
     if($('descripcion').value==""){
        msg+="Descripcion\n";
        ok=false;
     }
     if($('puntaje').value==""){
        msg+="puntaje\n";
        ok=false;
     }
     if($('imagen').value==""){
        msg+="imagen\n";
        ok=false;
     }
     if($('anio').value==""){
        msg+="año\n";
        ok=false;
     }
     if($('trailer').value==""){
        msg+="Trailer\n";
        ok=false;
     }
     if(ok==false){
        alert(msg);

     }
     else{
        xmlhttp.open("POST", servidor, true);
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
        xmlhttp.send(obje);
    }

}
