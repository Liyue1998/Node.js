#!/usr/bin/node 
//mv用法：
//（1）mv abc def重命名
//（2）移动文件

const fs=require('fs');
var src=process.argv[2],
      dst=process.argv[3];
fs.renameSync(src,dst);

