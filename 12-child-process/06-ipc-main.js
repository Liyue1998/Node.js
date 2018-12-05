#!/usr/bin/node 

const cp=require('child_process');

console.log('i am father process. PID:',process.pid);
var cmd=cp.fork('./06-ipc-child.js');

global.setTimeout(()=>{
  cmd.send('i am father,PID:'+process.pid);
},3000);

process.on('message',(msg)=>{
  console.log('CHILD-MSG:',msg);
});
