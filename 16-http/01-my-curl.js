#!/usr/bin/node

const http=require('http'),
      url=require('url');

var address=process.argv[2]||'http://sample.wangding.in/web/one-div.html';
console.log('URL:',address);
address=global.encodeURI(address);
console.log('encodeURI:',address);

const options={
  hostname:url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parse(address).pathname,
  method:'POST',
  headers:{
     'User-Agent':'01-my-curl.js'
     //'User-Agent':'curl/7.0'
  }
};

http.get(address,(res)=>{
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
  console.log();

  res.pipe(process.stuout);
});
