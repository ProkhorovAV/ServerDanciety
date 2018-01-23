var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var UrlScheme = new Schema({
	idUser:Number,
	idGroup:Number,
	url:String,
	date:Date
})

module.exports.getUrlScheme = function (){

	return UrlScheme;
}