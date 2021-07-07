addEventListener("load", load);

var servidor = "https://backendpruebaedi.herokuapp.com/peliculas/alta";


function $(demo){
    return document.getElementById(demo);
}
function load() {
    

    document.getElementById("guardar").addEventListener("click", click);
 
     
 }
 function click(){
    enviarMensajeAlServidorPost(servidor,retornoDelClick);
 
 }
 function retornoDelClick(respuesta){
    
        alert(respuesta);
    
}
 
 function enviarMensajeAlServidorPost(servidor, funcionARealizar){
 
     var xmlhttp = new XMLHttpRequest();
     var obje = new FormData();
     datos.append("titulo",$("titulo").value);
    
     var msg="falta ingresar datos en \n";
     var ok=true;

     if($('titulo').value==""){
         msg+="Titulo\n";
         ok=false;
     }
     /*if($('duracion').value==""){
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
     }*/
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
    
      
     
 
 
 

function Numeros(string){
    var out = '';
    ok=true;
    var filtro = '1234567890';
    for (var i=0; i<4; i++)
       if (filtro.indexOf(string.charAt(i)) != -1)
	     out += string.charAt(i);
    
         return out;
}
function filterFloat(evt,input){
        var key = window.Event ? evt.which : evt.keyCode;    
        var chark = String.fromCharCode(key);
        var tempValue = input.value+chark;
        if(key >= 48 && key <= 57){
            if(filter(tempValue)=== false){
                return false;
            }else{       
                return true;
            }
        }else{
              if(key == 8 || key == 13 || key == 0) {     
                  return true;              
              }else if(key == 46){
                    if(filter(tempValue)=== false){
                        return false;
                    }else{       
                        return true;
                    }
              }else{
                  return false;
              }
        }
}
function filter(__val__){
    var preg = /^([0-9]+\.?[0-9]{0,2})$/; 
    if(preg.test(__val__) === true){
        return true;
    }else{
        return false;
    }
    
}