var express = require("express");
var multer = require('multer');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: true});

module.exports.all = function(app){

	// открыть всем доступ
	app.all('*', function (req, res, next) {
  
	    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
	    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	    res.header("Access-Control-Allow-Credentials", true);

	    next();

	});
 
	// рассмотреть входящий запрос как json объект
	app.use(bodyParser.json())
 
	// путь к загрузкам картинкам
	app.use('/uploads', express.static('uploads'));

	// для загрузки
	var storage = multer.diskStorage({ //multers disk storage settings
	    destination: function (req, file, cb) {
	        cb(null, './uploads/');
	    },
	    filename: function (req, file, cb) {
	        var datetimestamp = Date.now();
	        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
	    }
	});


	var upload = multer({ //multer settings
		            storage: storage
		        }).single('file');

	/** API path that will upload the files */
	app.post('/upload', function(req, res) {
	    upload(req,res,function(err){
	        console.log("Загрузка файла",req.file);
	        if(err){
	             res.json({error_code:1,err_desc:err});
	             return;
	        }
	         res.json({error_code:0,err_desc:null,file:req.file});
	    });
	});

	return app;

}


