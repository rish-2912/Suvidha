const { userRegister, userLogin } = require('../controllers/auth.controller');

const router=require('express').Router();

router.post('/register',userRegister)
router.post('/login',userLogin)



module.exports=router;