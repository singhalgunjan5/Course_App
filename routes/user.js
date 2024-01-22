const {Router} = require("express");
const userMiddleware = require("../middleware/user")
const router = Router();

//User Routes

router.post('/signup',(req,res)=>{
    //implement user signup
});

router.get('/courses',(req,res)=>{
    //implement listing all courses
});

router.get('/courses/:courseId',userMiddleware,(req,res)=>{
    //implement course purchase logic
});

router.get('/purchasedCourses',userMiddleware,(req,res)=>{
    //implement fetching  purchased coures logic
});

module.exports = router;
