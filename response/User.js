var mongoose = require("mongoose");
 
module.exports.getUser = function(app,userScheme){

	/// получение параметров пользователя по id
	app.post("/getUser", function(request, response){

		var result ={id:-1};
		    
	    if(!request.body) return response.sendStatus(400); 

		if (request.body.login === undefined && request.body.password === undefined) return response.sendStatus(400); 

		mongoose.connect("mongodb://localhost:27017/usersdb");
	  
		var User = mongoose.model("User", userScheme);
		 
		User.find({}, function(err, docs){
 
		    mongoose.disconnect();
		     
		    if(err) return console.log(err);
  
	    	docs.forEach(function(argument){
	   			 
	    		if (argument.login===request.body.login && argument.password === request.body.password){
	 
	    			result = argument;

	    		}

	    	})
	   	 	  
		    return response.send(result);
	   		
			});  
		
		});

	return app; 

}

module.exports.getUsers = function(app,userScheme){

	/// получение параметров пользователя по id
	app.get("/getUsers", function(request, response){
  
		mongoose.connect("mongodb://localhost:27017/usersdb");
 
		var User = mongoose.model("User", userScheme);
		 
		User.find({}, function(err, docs){
  
		    mongoose.disconnect();
		    
		    if(err) return console.log(err);
   
		   	return response.send(docs);
	   		
			});  
		  
		});

	return app; 
 
 }

module.exports.setRegistrUser = function(app,userScheme){

	// регистрация пользователя
	app.post('/setRegistrUser',function(request,response){
	  
		if(!request.body) return response.sendStatus(400); 
		 
		mongoose.connect("mongodb://localhost:27017/usersdb");
 
		var User = mongoose.model("User", userScheme);

		var user = new User({
			idUser:1, 
			login:request.body.login,
			name: "noname",
			password:request.body.password,
			sex:false,
			phone:"",
		    
		});
 
		user.save(function(err){
		     mongoose.disconnect();  // отключение от базы данных 
	 
		});
	 
		response.send({action:"done"});
 
	})

	return app

}

