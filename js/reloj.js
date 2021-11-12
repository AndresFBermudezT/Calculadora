let html = document.getElementById("time");


setInterval(function(){
	tiempo = new Date();
	horas = tiempo.getHours();
	minutos = tiempo.getMinutes();
	segundos = tiempo.getSeconds();

	html.innerHTML = horas + " : "+minutos+" : "+segundos;
},1000);
