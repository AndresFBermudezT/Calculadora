
var html = document.getElementById("time");

setInterval(function(){
   tiempo = new Date();
   horas = tiempo.getHours();
   minutos = tiempo.getMinutes();


   html.innerHTML = horas + " : "+minutos;
},1000);


function filtro(){
   var string = document.getElementById("operacion").value;
    var salida = '';
    var filtro = ',1234567890';
    var coma = true;
    for (var i=0; i<string.length; i++){
      if (filtro.indexOf(string.charAt(i)) != -1){
         if(filtro.indexOf(string.charAt(i)) == 0 && coma){            
            salida += string.charAt(i);
            coma = false;
         }else if(filtro.indexOf(string.charAt(i)) != 0){
            salida += string.charAt(i);
         }
       }
    }                    
    document.getElementById("operacion").value = salida; 
} 

function resolver(){
   var operacion = document.getElementById("operacion").value;
   alert(operacion);
}

function escribir(caracter){    
   document.getElementById("operacion").value += caracter;
   filtro();
}
function borrar(){
   document.getElementById("operacion").value = 0;
}