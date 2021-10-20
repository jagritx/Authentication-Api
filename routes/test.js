const router = require('express').Router();
const verify = require('./verifyToken');


router.get('/',async(req,res)=>{
    res.send('Please refer https://github.com/jagritx/TripSplit-App-JWT-Auth');
});
module.exports = router;
