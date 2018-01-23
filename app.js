var express = require("express"); 
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
// для работы с promise
mongoose.Promise = global.Promise;
 
// установка схемы для постов
var simplePostScheme = require("./schemes/Post").getPostScheme();
var userScheme = require("./schemes/User").getUserScheme(); 
var photoScheme = require("./schemes/Photo").getPhotoScheme(); 
var videoScheme = require("./schemes/Video").getVideoScheme(); 
var fileScheme = require("./schemes/File").getVideoScheme(); 
var urlScheme = require("./schemes/Url").getUrlScheme(); 
var surveyScheme = require("./schemes/Survey").getSurveyScheme(); 
          
var app = express();

app = require("./response/Settings").all(app);
 
app = require("./response/User").getUser(app,userScheme);
app = require("./response/User").getUsers(app,userScheme);
app = require("./response/User").setRegistrUser(app,userScheme);
  
 
app = require("./response/Post").setPostSimple(app,simplePostScheme)
app = require("./response/Post").getPosts(app,simplePostScheme)
app = require("./response/Post").delitePostSimple(app,simplePostScheme)
	 

app = require("./response/Photo").addphoto(app,photoScheme)
app = require("./response/Photo").getphotosId(app,photoScheme)
  
app = require("./response/Video").addVideo(app,videoScheme)
app = require("./response/Video").getVideosId(app,videoScheme)
  
app = require("./response/File").AddFile(app,fileScheme)
app = require("./response/File").getFileIdUser(app,fileScheme)
app = require("./response/File").getFileId(app,fileScheme)
 
  





console.log('listen:4000')

app.listen(4000);

 