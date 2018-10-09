#!/usr/bin/node 

const log=console.log;

var buf1=new Buffer(256);  //实例化，内存大小256，不在堆上分配内存
buf1[0]=23; //初始化第一个字节


log('buffer length:',buf1.length);
//log('\nbuffer content:',buf1);


//通过循环初始化buffer中的每个字节:
/*
for(var i=0;i<256;i++){
  buf1[i]=i;
  log('buf1 content:',buf1);
}
*/


//类似数组，对buffer做切片操作
var buf2=buf1.slice(250,256);
log('\nbuf2 content:',buf2);


//在buffer中填充数据，buffer数据转化成JSON数据
//buf2.fill(0);
//log('\nbuf2 content:',buf2);
//log('\nbuf2\'s JSON:',buf2.toJSON());
//log('\nbuf2\'s JSON:',JSON.stringify(buf2));


//用数组初始化buffer
var arr=['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3=new Buffer(arr);
log('\nbuf3 content:',buf3);


//用字符串初始化buffer
var buf4=new Buffer('hello world','utf8'); 
log(buf4.length);
log('\nbuf4 content:',buf4);


//buffer数据复制
buf3.copy(buf4);  //3拷到buf4上
log('\nbuf4 content:',buf4);


//UTF8编码
var str='你好 wangding';
var buf5=new Buffer(str,'utf8');
log(buf5.length);
log('\nbuf5 content:',buf5);
log('\nstr length',str.length);

