#!/usr/bin/node 

//console.log('first');

//global.setTimeout(()=>{
//  console.log('second');
//},1000);

//console.log('third');



function Bomb(){
  this.message='Bomb!';
}
Bomb.prototype.explode=function(){
  console.log(this);  //先看一下this指谁
  console.log(this.message);
};
var b=new Bomb();
var timeID=global.setTimeout(b.explode.bind(b),2000);
global.clearTimeout(timeID);  //爆炸之前清除操作

