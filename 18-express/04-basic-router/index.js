#!/usr/bin/node 

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
  res.end('hello world!');
});

//支持多个路由的处理函数
function c1(req,res,next){
  console.log('c1');
  next();
}
function c2(req,res,next){
  console.log('c2');
  next();
}

//普通路由
app.get('/abc',[c1,c2],function(req,res,next){
  console.log('abc'); 
  next();
},function(req,res){
  console.log('def');
  res.send('OK!');
});

app.listen(8080);
