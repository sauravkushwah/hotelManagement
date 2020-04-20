const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

// Read all the info of a specific Route

router.get('/', async(req, res)=>{
	try{
		const posts = await Post.find();
		res.json(posts);
	}catch(err){
		res.json({message:err});
	}
});

// Read the particular info a specific Route

router.get('/:postId', async(req, res)=>{
	try{
		const post = await Post.findById(req.params.postId);
		res.json(Post);
	}catch(err){
		res.json({message:err});
	}
});

// Create a Route

router.post("/", async(req, res)=>{
	const post = new Post({
		guestName:req.body.guestName,
		city:req.body.city,
		purposeOfTravel:req.body.purposeOfTravel,
		roomType:req.body.roomType,
		outDate:req.body.outDate,
		Amount:req.body.Amount,
		roomCleaning:req.body.roomCleaning,
	});

	try{
		const savedPost =  await post.save(); 
		res.json(data);
		}
	catch(err){
			res.json({message:err});
	}
});




// Delete a specific Route

router.delete('/:postId', async(req, res)=>{
	try{
		const removedPost = await Post.remove({ _id: req.params.postId});
		res.json({message:err});
	}catch(err){
			res.json({message:err})};
});


// update a specific route

router.patch('/:postId', async(req, res)=>{
	try{
		const updatePost = await Post.updateOne(
			{ _id: req.params.postId}, 
			{ $set: {title:req.body.title}}
			);
		res.json(updatedPost);
	}catch(err){
			res.json({message:err})};
});

module.exports = router;