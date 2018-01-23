var mongoose = require("mongoose");

module.exports.addphoto = function(app,photoScheme){

	// добавление фото
	app.post("/addphoto",function(request,response){
 
		if(!request.body) return response.sendStatus(400); 
	  
		mongoose.connect("mongodb://localhost:27017/postdb");
		 
		var Photo = mongoose.model("Photo", photoScheme);

		var photo = new Photo({ 
			idUser:request.body.idUser,
			idGroup:request.body.idGroup,
			url:request.body.url,
			date:request.body.date	    
		});
	  
		console.log("Сохранение фото",photo)
	  
		photo.save(function(err,docs){
		   
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

module.exports.getphotosId= function(app,photoScheme){

	// получение фотографий по id
	app.get('/getphotosId/:id',function(request,response){
		 
		var id = request.params["id"];

		mongoose.connect("mongodb://localhost:27017/postdb");
	 
		var Photo = mongoose.model("Photo", photoScheme);

		 Photo.find({idUser:id}, function(err, docs){

		    mongoose.disconnect();
		   
		    if(err) return console.log(err);
	  
		    return response.send(docs);
	   		
		});
		
		 
	})

	return app;
}