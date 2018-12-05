#!/usr/bin/node 

const http=require('http'),
      url=require('url'),
      qs=require('querystring');

var items=[];

http.createServer((req,res)=>{
  if(req.url === '/' && req.method === 'GET'){
  

    console.log('query string:',url.parse(req.url).query);

    if(url.parse(req.url).query !== ''){
      var data=qs.url.parse(req.url).query;
      if(typeof data !== 'undefined')  items.push(data.item); 

    var html=''
  +  '<!DOCTYPE html>'
  +   '<html lang="en">'
  +   '<head>'
  +   '<meta charset="UTF-8"/>'
  +   '<title>Todo List</title>'
  +   '</head>'
  +   '<body>'
  +   '<h1>Todo List!</h1>'
  +   '<ul>'
  +   items.map(function(item){return '<li>'+item+'</li>'}).join('\n')
  +   '</ul>'
  +   '<form method="GET" action="/">'
  +   '<input type="text" name="item">'
  +   '<input type="submit" value="Add Item">'
  +   '</form>'
  +   '</body>'
  +   '</html>';


    res.end(html);
  }else{
    res.statusCode=404;
    res.end('Error');
  }
  
}).listen(8080);
