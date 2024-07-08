const authentication_handler = require('../authentication_handler')
const router = require('express').Router()


router.get("/",authentication_handler.intialPage);

router.get("/login",authentication_handler.preLogin);

router.get("/home",authentication_handler.homePage);

router.post("/login",authentication_handler.loginPage);

router.post("/signup",authentication_handler.signUp);

router.get('/logout',authentication_handler.logOut);

router.get('/edit_view',authentication_handler.editView);

router.post('/edit',authentication_handler.edit_data);

module.exports = router