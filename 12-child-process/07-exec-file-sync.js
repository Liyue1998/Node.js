#!/usr/bin/node 
//同步版本

const cp=require('child_process');

console.log(cp.execFileSync('cat',['01-exec-file.js']).toString('utf8'));
