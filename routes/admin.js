const {Router} = require("express");
const AdminMiddleware = require("../middleware/admin")
const router = Router();

//Admin Routes

router.post('/signup',(req,res)=>{
    //implement admin signup
});

router.post('/courses',(req,res)=>{
    //implement course creation 
});

router.get('/courses',(req,res)=>{
    //implement fetching all courses
});

module.exports = router;
