var faceSQL = ""
function ConverteStringToSQL(faceID, gender, age, hair,accessories, glasses, facialHair){
	var fotoSQL = "INSERT INTO deltapremium.foto VALUES(" + url + ");";
	//Fazer um sub-select para selecionar o id de cada imagem salva no banco,
	//Uma imagem pode ter varias pessoas!
	var atributosSQL = "INSERT INTO deltapremium.atributos values('" + gender + "','')";
	
}

function SalvarDados(urlFoto){
	faceSQL = "INSERT INTO teste VALUES('" + urlFoto + "');";
	console.log(faceSQL);
}
