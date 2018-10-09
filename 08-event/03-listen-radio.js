#!/usr/bin/node 

const Dog=require('./03-radio.js');

var taidi=new Dog('taidi',5);
var zangao=new Dog('zangao',10);
taidi.on('bark',onBark);
zangao.on('bark',onBark);
function onBark(){
    console.log('%s is barked! energy:%d',this.name(),this.energy());

}

