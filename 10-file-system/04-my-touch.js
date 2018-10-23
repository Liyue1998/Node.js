#!/usr/bin/node
//用touch创建新文件的功能

const fs=require('fs');
var file=process.argv[2];
fs.writeFileSync(file,'');

