var express = require('express');
var router = express.Router();

var mysql = require('mysql');


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index');
});

router.post('/gravar', async (req, res, next) => {
	var con = mysql.createConnection({
		host: "localhost",
		user: "delta",
		password: "123mudar",
		database: "dantasninja"
	});

	con.connect(function (err) {
		if (err) throw err;
		console.log("Connected!");
		/*
		function SalvarDados(urlDaFoto){
			var dados
			dados = JSON.parse(req.body.dados)
			console.log(dados.length);
			
			var sql = `
			INSERT INTO foto (url) 
			VALUES ('${urlDaFoto}')`
			
			con.query(sql, function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
			});
			
		}*/
		// id_foto, faceid,glasses,haircolor,gender, smile,age
		var dados
		dados = JSON.parse(req.body.dados)
		console.log(dados.length);

		for (var i = 0; i < dados.length; i++) {
			var sql = `
			INSERT INTO att (faceid,glasses,haircolor,gender,smile,age) 
			VALUES ('${dados[i].faceId}',
				'${dados[i].faceAttributes.glasses}',
				'${dados[i].faceAttributes.hair.hairColor[i].color}',
				'${dados[i].faceAttributes.gender}',
				'${dados[i].faceAttributes.smile}',
				'${dados[i].faceAttributes.age}');`

			con.query(sql, function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
			});
		}

		//insert

	});
})

module.exports = router;
