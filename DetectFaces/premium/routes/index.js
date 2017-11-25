var express = require('express');
var router = express.Router();

var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/gravar', async (req, res, next) => {
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "delta",
		password: "123mudar",
		database: "dantasninja"
	});

	con.connect(function(err) {
	  if (err) throw err;
	  console.log("Connected!");


		var dados = JSON.parse(req.body.dados)
		for (var i = 0; i < dados.length; i++) {
			var sql = `
INSERT INTO atributos (nome) 
VALUES ('${dados[i].faceId}')`

			con.query(sql, function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
			});

			//insert
		}
	});
})

module.exports = router;
