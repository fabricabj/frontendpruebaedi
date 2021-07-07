addEventListener("load", load);
//llamo al servidor
var servidor = "https://backendpruebaedi.herokuapp.com/";
//var servi = "localhost:444";

function $(demo){
    return document.getElementById(demo);
}

function load(){
    document.getElementById("alta").addEventListener("click", click);
}

function click(){
   enviarMensajeAlServidorPost(servidor,retornoDelClick);

}

function retornoDelClick(respuesta){
    alert(respuesta);
}

function enviarMensajeAlServidorPost(servidor, funcionARealizar) {

    //declaro el objeto
    var xmlhttp = new XMLHttpRequest();
     var datos = new FormData();
     datos.append("titulo",$("titulo").value);
     datos.append("duracion",$("duracion").value);
     datos.append("puntaje",$("puntaje").value);
     datos.append("imagen",$("imagen").value);
     datos.append("treiler",$("trailer").value);
     datos.append("descripcion",$("descripcion").value);
    
     var msg="falta ingresar datos en \n";
     var ok=true;

     if(document.getElementById('titulo').value==""){
         msg+="Titulo\n";
         ok=false;
     }
     if(document.getElementById('duracion').value==""){
        msg+="Duracion\n";
        ok=false;
     }
     if(document.getElementById('descripcion').value==""){
        msg+="Descripcion\n";
        ok=false;
     }
     if(document.getElementById('puntaje').value==""){
        msg+="puntaje\n";
        ok=false;
     }
     if(document.getElementById('imagen').value==""){
        msg+="imagen\n";
        ok=false;
     }
     if(document.getElementById('anio').value==""){
        msg+="año\n";
        ok=false;
     }
     if(document.getElementById('trailer').value==""){
        msg+="Trailer\n";
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

