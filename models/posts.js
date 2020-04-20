const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
	guestName:{
		type:String,
		required:true
	},
	city:{
		type:String,
		required:true
	},
	purposeOfTravel:{
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
	outDate:{
		type:Date,
		required:true
	},
	Amount:{
		type:Integer,
		required:true
	},
	roomCleaning:{
		type:String,
		required:true
	}
});

module.exports = mongoose.model("Posts",postSchema);