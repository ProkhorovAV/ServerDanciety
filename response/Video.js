var mongoose = require("mongoose");

module.exports.addVideo = function(app,videoScheme){

	// добавление фото
	app.post("/addvideo",function(request,response){
 
		if(!request.body) return response.sendStatus(400); 
	  
		mongoose.connect("mongodb://localhost:27017/postdb");
		 
		var Video = mongoose.model("Video", videoScheme);

		var video = new Video({ 
			idUser:request.body.idUser,
			idGroup:request.body.idGroup,
			url:request.body.url,
			date:request.body.date	    
		});
	  
		console.log("Сохранение фото",video)
	  
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

module.exports.getVideosId= function(app,videoScheme){

	// получение фотографий по id
	app.get('/getvideosId/:id',function(request,response){
		 
		var id = request.params["id"];

		mongoose.connect("mongodb://localhost:27017/postdb");
	 
		var Video = mongoose.model("Video", videoScheme);

		 Video.find({idUser:id}, function(err, docs){

		    mongoose.disconnect();
		   
		    if(err) return console.log(err);
	  
		    return response.send(docs);
	   		
		});
		
		 
	})

	return app;
}