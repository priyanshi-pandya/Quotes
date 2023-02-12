const router = require('express').Router();
const UserModel = require('./../models/usermodel');



router.post('/signup',async function(req,res){
    console.log('start');
    const data = req.body;
    const newuser = new UserModel(data
    );
    await newuser.save(function(err){
        if(err){
            res.json(err);
            console.log(err);
            return;
        }

        res.json({success: true, data : newuser});
    })

});



module.exports = router;