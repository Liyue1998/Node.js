#!/usr/bin/node 

const http=require('http'),
      fs=require('fs');

http.createServer((req,res)=>{
    console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    console.log(req.headers);
    console.log('');

    if(req.url === '/' && req.method === 'GET'){
      show(req,res,uploadPage);
      return;
    }

    if(req.url === '/' && req.method === 'POST'){
      var data='';
      req.setEncoding('binary');
      req.on('data',(chunk)=>{
        data+=chunk;
      });
      req.on('end',()=>{
        console.log(data);
        var das=data.split('\r\n');
        var fileName=das[1].split(';')[2].split('=')[1];
        fileName=fileName.slice(1,fileName.length-1);
        console.log('file name:',fileName);
        var fileData=das[4];
        console.log('file data:',fileData);
        fs.writeFileSync(fileName,fileData);
      });

      show(req,res,backPage);
    }else{
    //res.statusCode=404;
    //res.end('Error');
    show(req,res,errPage);
  }
  
}).listen(8080);

function show(req,res,page){
    res.statusCode=(page==='errPage'?404:200);
    res.setHeader('Content-Type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(page));
    res.end(page); 
}


const uploadPage=''
+ '<!DOCTYPE html>' + '<html lang="en">'
+ '<head>'
+ ' <meta charset="UTF-8">'
+ ' <title>Upload File<title>'
+ '</head>'
+ '<body>'
+ '<h1>Upload File</h1>'
+'<form action="/upload" method="POST" enctype="multipart/form-data">'
+ '  <input type="file" name="filename">'
+ '  <input type="submit" name="Upload">'
+ '</form>'
+ '</body>'
+ '</html>';

const backPage=''
+ '<!DOCTYPE html>'
+ '<html lang="en">'
+ '<head>'
+ ' <meta charset="UTF-8">'
+ ' <title>Back<title>'
+ '</head>'
+ '<body>'
+ '<h1>OK! Upload Success!</h1>'
+ '<a href="/">Continue to Upload File</a>'
+ '</body>'
+ '</html>';

const errPage=''
+ '<!DOCTYPE html>'
+ '<html lang="en">'
+ '<head>'
+ ' <meta charset="UTF-8">'
+ ' <title>Error<title>'
+ '</head>'
+ '<h1>Something Wrong!</h1>'
+ '<a href="/">Back to Upload File</a>'
+ '</body>'
+ '</html>';

