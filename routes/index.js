var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');

var Product = require('../models/product');
var Order = require

/* GET home page. */
router.get('/', function(req, res, next){
Product.find(function(err,docs){
  var productChunks = [];
  var chunkSize = 3;
  for(var i = 0; i < docs.length; i += chunkSize){
    productChunks.push(docs.slice(i, i + chunkSize));
  }
    res.render('shop/index', { title: 'music library',products:productChunks});
});
});

router.get('/add-to-cart/:id', function(req, resp, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function(err, product){
    if (err){
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    resp.redirect('/')
  });
});

router.get('/shopping-cart',function(req, resp, next){
  if(!req.session.cart){
    return resp.render('shop/shopping-cart',{products:null});
  }
  var cart = new Cart(req.session.cart);
  resp.render('shop/shopping-cart',{products: cart.generateArray(), totalPrice: cart.totalPrice});
});

router.get('/checkout',function(req, resp, next){
    if(!req.session.cart){
        return resp.redirect('/shopping-cart');
    }
    var cart = new Cart(req.session.cart);
    resp.render('shop/checkout',{total:cart.totalPrice});
});

module.exports = router;
