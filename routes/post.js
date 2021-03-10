/*const createPost = (req,res,next) => {

	res.send('Hello from Node Js using Nodemon');
};

module.exports = {

	createPost
};*/

const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {

	res.send('Hello from Node Js using Nodemon <br> here we go again');
});

router.get('/home', (req, res, next) =>{

	res.render('home',null);
});

module.exports = router;


