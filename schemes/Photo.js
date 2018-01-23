var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var PhotoScheme = new Schema({
	idUser:Number,
	idGroup:Number,
	url:String,
	date:Date
})

module.exports.getPhotoScheme = function (){

	return PhotoScheme;
}