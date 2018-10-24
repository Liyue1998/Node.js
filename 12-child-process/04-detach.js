#!/usr/bin/node 

//不分离的
const cp=require('child_process');

console.log("i am father process.PID:",process.pid);

var cmd=cp.spawn('./02-child.js',[],{detached:true,stdio:['ignore',1,2]});
//true：父子可以分离

cmd.stdout.pipe(process.stdout);

global.setTimeout(()=>{
  console.log('i am father,goodbey!');
  process.exit();
},6000);
