#!/usr/bin/node  

const EventEmitter=require('events').EventEmitter;

var emitter=new EventEmitter();

emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('hello',()=>{
  console.log('HELLO EVENT');
});

emitter.on('bey',()=>{
  console.log('bey event');
  process.exit();
});

global.setInterval(()=>{
  emitter.emit('hello');
},500);

global.setTimeout(()=>{
  emitter.emit('bey');
},3000);
