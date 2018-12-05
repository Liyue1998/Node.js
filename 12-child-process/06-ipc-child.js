#!/usr/bin/node 

const cp=require('child_process');

console.log('i am child process. PID:'+process.pid);

process.send('Child process is start! PID:'+process.pid);
//send:进程间通信
process.on('message',(msg)=>{
  console.log('message from father:',msg);
});
