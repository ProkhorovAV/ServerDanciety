var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var PostScheme = new Schema({ 
	idUser:Number,
	idGroup:Number,
	caption:String,
	date:Date,
	text:String,
	images:[String],
	videos:[String]
	 
});

module.exports.getPostScheme = function (){

	return PostScheme;
}