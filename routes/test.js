const router = require('express').Router();
const verify = require('./verifyToken');


router.get('/',async(req,res)=>{
    res.send('Heroku Test');
});
module.exports = router;