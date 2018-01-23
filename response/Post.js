var mongoose = require("mongoose");

module.exports.setPostSimple = function(app,simplePostScheme){

	// добавление поста простого
	app.post('/setPostSimple',function(request,response){
		 
		if(!request.body) return response.sendStatus(400); 
		 
		mongoose.connect("mongodb://localhost:27017/postdb");
 
		var Post = mongoose.model("Post", simplePostScheme);

		var post = new Post({ 
			idUser:request.body.idUser,
			idGroup:request.body.idGroup,
			caption:request.body.caption,
			date:request.body.date,
			text:request.body.text,
			images:request.body.images,
			videos:request.body.videos
		    
		});
	   
		post.save(function(err,docs){
		   
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

module.exports.getPosts = function(app,simplePostScheme){

	/// получение посты
	app.get("/getPosts", function(request, response){
		  
		var result = {id:-1};

		mongoose.connect("mongodb://localhost:27017/postdb");
 	 
		var Post = mongoose.model("Post", simplePostScheme);
		 
		Post.find({}, function(err, docs){

		    mongoose.disconnect();
		     
		    if(err) return console.log(err);

		    docs.sort(function (a, b) {
				if (a.date < b.date) {
					return 1;
				}
				if (a.date > b.date) {
					return -1;
				}
				// a должно быть равным b
				return 0;
			});
	 
		    return response.send(docs);
	   		
		}); 
		 
	});
 
	return app;
}

module.exports.delitePostSimple = function(app,simplePostScheme){

	// удаление постов
	app.delete('/delitePostSimple/:id',function(request,response){
		 
		var id = request.params["id"];

		mongoose.connect("mongodb://localhost:27017/postdb");
 
		var Post = mongoose.model("Post", simplePostScheme);

		Post.findByIdAndRemove(id, function(err, docs){
		    
		    mongoose.disconnect();
  
		    if(err) return console.log(err);
	 
		    return response.send(
		    	{action:"done",
		    	post:docs
		    });
		      
		}); 
		 
	})

	return app;
}