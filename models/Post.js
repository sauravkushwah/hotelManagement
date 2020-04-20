const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
	guestName:{
		type:String,
		required:true
	},
	roomType:{
		type:String,
		required:true
	},
	inDate:{
		type:Date,
		default:Date.now
	},
	roomCleaning:{
		type:String,
		required:true
	}
});

module.exports = mongoose.model("Posts",postSchema);