var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var SurveyScheme = new Schema({
	idUser:Number,
	idGroup:Number,
	question:String,
	answer:[String],
	url:String,
	date:Date
})

module.exports.getSurveyScheme = function (){

	return SurveyScheme;
}