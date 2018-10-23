#!/usr/bin/node 

const http=require('http'),
      path=require('path'),
      fs=require('fs'),
      util=require('util'),
      log=util.debuglog('wd') ;

var file; //require file in URL

http.createServer((req,res)=>{
  log(req.headers);
  log();
  log(req.url);
  console.log(req.url);
  file=path.join(__dirname,req.url);
  log();
  log(file);

  //res.end(fs.readFileSync(file).toString('utf8'));

 var read= fs.createReadStream(file);
 read.on('error',(err)=>{
   res.end(err.message);
   return;
 });
  read.pipe(res);
}).listen(8080);

