addEventListener("load", load);

var servidor = "https://backendpruebaedi.herokuapp.com/peliculas";


function $(demo){
    return document.getElementById(demo);
}
function load() {
    

    $("guardar").addEventListener("click",AltaPeliculas);
 
     
 }
 
 function AltaPeliculas(){
 
     var xmlhttp = new XMLHttpRequest();
    
     xmlhttp.open("POST", servidor, true);
     xmlhttp.onreadystatechange = function () {
         //Veo si llego la respuesta del servidor
         if (xmlhttp.readyState == XMLHttpRequest.DONE) {
             //Reviso si la respuesta es correcta
             if (xmlhttp.status == 200) {
                 //alert(xmlhttp.responseText);
 
                 
             }
             else {
                 alert("ocurrio un error");
             }
         }
         var msg="falta ingresar datos en \n";
     var ok=true;

     if($('titulo')==""){
         ms+="Titulo\n";
         ok=false;
     }
     if($('duracion')==""){
        ms+="Duracion\n";
        ok=false;
     }
     if($('descripcion')==""){
        ms+="Descripcion\n";
        ok=false;
     }
     if($('puntaje')==""){
        ms+="puntaje\n";
        ok=false;
     }
     if($('imagen')==""){
        ms+="imagen\n";
        ok=false;
     }
     if($('anio')==""){
        ms+="año\n";
        ok=false;
     }
     if($('trailer')==""){
        ms+="Trailer\n";
        ok=false;
     }
     if(ok==false){
        alert(msg);

     }
     else
     var obje = new FormData();
     obje.append("Titulo", $("titulo").value );
     obje.append("Descripcion", $("descripcion").value );
     obje.append("Duracion", $("duracion").value );
     obje.append("puntaje", $("puntaje").value );
     obje.append("imagen", $("imagen").value );
     obje.append("anio", $("anio").value );
     obje.append("trailer", $("trailer").value );
     //envio el mensaje    
     xmlhttp.send(obje);
     alert("Usuario creado");
 
     $("titulo").value = "";
     $("descripcion").value = "";
     $("duracion").value = "";
     $("puntaje").value = "";
     $("imagen").value = "";
     $("anio").value  ="";
     $("trailer").value="";
 
 
 
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