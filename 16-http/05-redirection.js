#!/usr/bin/node 
const http=require('http'),
      log=console.log;  

const addr='http://www.sian.com/'; 
        
function getURL(addr){ 
    http.get(addr,(res)=>{ 
         if(res.statusCode > 300 && res.statusCode < 400){ 
           var newAddr = res.headers['location']; 
           log('HTTP/${res.httpversion} ${res.statusCode} ${res.st    atusMessage}'); 
           getURL(newAddr); 
         }else{ 
             res.pipe(process.stdout);       
         } 
     } 
  } 
getURL(addr);
)}

getURL(addr);
