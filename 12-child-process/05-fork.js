#!/usr/bin/node 
//独立子进程
const cp=require('child_process');

console.log('i am father.PID',process.pid);
cp.fork('./02-child.js');

global.setTimeout(()=>{
  console.log('i am father ,goodbey!');
  process.exit();
},6000);
