$(function() {
	$.getJSON("js/automoveis.json", function(data) {
		for (var i = 0; i < data['automoveis'].length; i++) {
			$("#TableData").append("<tr>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["MARCA"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CARRO"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CAMBER_DIANTEIRO_MIN"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CAMBER_DIANTEIRO_MAX"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CASTER_DIANTEIRO_MIN"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CASTER_DIANTEIRO_MAX"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CONVERGENCIA_DIANTEIRA_MIN"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CONVERGENCIA_DIANTEIRA_MAX"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CAMBER_TRASEIRA_MIN"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CAMBER_TRASEIRA_MAX"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CONVERGENCIA_TRASEIRA_MAX"] + "</td>");
			$("#TableData").append("<td scope='col'>" + data["automoveis"][i]["CONVERGENCIA_TRASEIRA_MAX"] + "</td>");
			$("#TableData").append("</tr>");
		}
	});
});

const Filtro = function(){
	var marcas = $("#marca").val()
	var carros = $("#carro").val()
	$("#TableData").empty()

	$.getJSON("js/automoveis.json", function(data) {
		var Array = data["automoveis"].filter(automovel=>{
			//automovel.MARCA.indexOf(marcas.toUpperCase()) != -1 && automovel.CARRO.indexOf(carros.toUpperCase()) != -1
			if(!automovel.CARRO) return false
			else if (automovel.MARCA.indexOf(marcas.toUpperCase()) != -1 && automovel.CARRO.indexOf(carros.toUpperCase()) != -1) return automovel
			else return false
		})

		console.log(Array)
		for (var i = 0; i < data['automoveis'].length; i++) {
			$("#TableData").append("<tr>");
			$("#TableData").append("<td scope='col'>" + Array[i].MARCA + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CARRO + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CAMBER_DIANTEIRO_MIN + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CAMBER_DIANTEIRO_MAX + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CASTER_DIANTEIRO_MIN + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CASTER_DIANTEIRO_MAX + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CONVERGENCIA_DIANTEIRA_MIN + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CONVERGENCIA_DIANTEIRA_MAX + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CAMBER_TRASEIRA_MIN + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CAMBER_TRASEIRA_MAX + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CONVERGENCIA_TRASEIRA_MAX + "</td>");
			$("#TableData").append("<td scope='col'>" + Array[i].CONVERGENCIA_TRASEIRA_MAX + "</td>");
			$("#TableData").append("</tr>");
		}
	});
}