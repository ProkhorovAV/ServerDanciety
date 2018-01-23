var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var VideoScheme = new Schema({
	idUser:Number,
	idGroup:Number,
	url:String,
	date:Date
})

module.exports.getVideoScheme = function (){

	return VideoScheme;
}