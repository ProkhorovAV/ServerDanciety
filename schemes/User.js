var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var UserSceme = new Schema({
	idUser:Number, 
	login:String,
	name:String,
	password:String, 
	sex:Boolean,
	phone:String
}) 

module.exports.getUserScheme = function (){

	return UserSceme;
}