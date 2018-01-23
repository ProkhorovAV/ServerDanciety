var mongoose = require("mongoose");

module.exports.AddFile = function(app,fileScheme){

	// добавление фото
	app.post("/addfile",function(request,response){
 
		if(!request.body) return response.sendStatus(400); 
	  
		mongoose.connect("mongodb://localhost:27017/postdb");
		 
		var File = mongoose.model("File", fileScheme);

		var file = new File({ 
			idUser:request.body.idUser,
			idGroup:request.body.idGroup,
			url:request.body.url,
			date:request.body.date	    
		});
	  
		console.log("Сохранение file",file)
	  
		file.save(function(err,docs){
		   
		    mongoose.disconnect();  // отключение от базы данных 
		  	  
		  	if(err) return console.log(err);
			
			response.send({
					action:"done",
					post:docs
					});
		});
  
	})
 
	return app;
}


module.exports.getFileIdUser= function(app,fileScheme){

	// получение фотографий по id
	app.get('/getfileIdUser/:id',function(request,response){
		 
		var id = request.params["id"];

		mongoose.connect("mongodb://localhost:27017/postdb");
	 
		var File = mongoose.model("File", fileScheme);

		 File.find({idUser:id}, function(err, docs){

		    mongoose.disconnect();
		   
		    if(err) return console.log(err);
	  
		    return response.send(docs);
	   		
		});
		 
	})

	return app;
}

module.exports.getFileId= function(app,fileScheme){

	// получение фотографий по id
	app.get('/getfileId/:id',function(request,response){
		 
		var id = request.params["id"];

		mongoose.connect("mongodb://localhost:27017/postdb");
	 
		var File = mongoose.model("File", fileScheme);

		 File.find({_id:id}, function(err, docs){

		    mongoose.disconnect();
		   
		    if(err) return console.log(err);
	  
		    return response.send(docs);
	   		
		});
		 
	})

	return app;
}