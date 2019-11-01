var express = require('express');
var router = express.Router();
var csrf = require ('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/profile',isLoggedIn,function(req,resp,next){
    resp.render('user/profile');
});

router.get('/logout',isLoggedIn, function(req, resp, next){
    req.logout();
    resp.redirect('/');
});

router.use('/',notLoggedIn, function(req,resp,next){
    next();
});

router.get('/signup',function(req,resp,next){
    var messages = req.flash('error');
    resp.render('user/signup',{csrfToken:req.csrfToken(),messages:messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup',{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signup',
    failureFlash:true
}));



router.get('/signin', function(req,resp, next){
    var messages = req.flash('error');
    resp.render('user/signin',{csrfToken:req.csrfToken(),messages:messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin',{
    successRedirect:'/user/profile',
    failureRedirect:'/user/signin',
    failureFlash:true
}));


router.get('/profile',isLoggedIn,function(req,resp,next){
    resp.render('user/profile');
});
module.exports = router;

function isLoggedIn(req, resp,next){
    if(req.isAuthenticated()){
        return next();
    }
    resp.redirect('/');
}
function notLoggedIn(req, resp,next){
    if(!req.isAuthenticated()){
        return next();
    }
    resp.redirect('/');
}