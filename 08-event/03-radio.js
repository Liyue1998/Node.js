#!/usr/bin/node 

const EventEmitter=require('events').EventEmitter,
      util        =require('util');

function Dog(name,energy){
  var _name=name;
  var _energy=energy;
  var _listeners={};

  var self=this;
  EventEmitter.call(this);

 var timer= global.setInterval(()=>{
   if(_energy>0){   
   self. emit('bark');
    _energy--;
  }
   else{
    global.clearInterval(timer);
   }
 } ,500);

 this.name=()=>_name;
 this.energy=()=>_energy;
 this.
}

//Dog.prototype=EventEmitter.prototype;//实现继承的第一种方式
util.inherits(Dog,EventEmitter);//实现继承的第二种方式

module.exports=Dog;  //暴露出Dog构造函数
