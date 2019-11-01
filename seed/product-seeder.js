var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
    imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
    title:'Reputation',
    description:'by Taylor Swift!!!',
    price:8.99
}),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Havana',
        description:'by Camila Cabello',
        price:7.99
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'WOLF',
        description:'by Selena Gomez',
        price:15
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Faded',
        description:'by Alan Walker',
        price:12
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Animals',
        description:'by Maroon 5',
        price:6.99
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Attention',
        description:'by Charlie Puth',
        price:15
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Girls like you',
        description:'by Maroon 5 and Cardi',
        price:17
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Back To You',
        description:'by Selena Gomez',
        price:10
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Magenta Riddim',
        description:'by DJ Snake',
        price:3
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'BoyFriend',
        description:'by Justin Bieber',
        price:2.99
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Dhadak Title Track',
        description:'by Sherya Ghosal',
        price:18
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Bom Diggy Diggy',
        description:'by Jasmin Walia and Zack Knight',
        price:9
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Dilbar',
        description:'by Neha Kakkar',
        price:10
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Lohore',
        description:'by Guru Randhawa',
        price:4.99
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Hath Chumme',
        description:'by Ammy Virk, B Praak',
        price:5.99
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Badnam',
        description:'by Mankirt Aulakh',
        price:6
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Yeah Baby',
        description:'by Garry Sandhu',
        price:3.99
    }),
    new Product({
        imagePath:'https://cdn.worldvectorlogo.com/logos/google-play-music.svg',
        title:'Sip Sip',
        description:'by Jaasmine Sandlas',
        price:7
    })




];

var done=0;
for(var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}