var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var FileScheme = new Schema({
	idUser:Number,
	idGroup:Number,
	url:String,
	date:Date
})

module.exports.getVideoScheme = function (){

	return FileScheme;
}