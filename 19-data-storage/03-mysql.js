#!/usr/bin/node

const mysql=require('mysql');

const con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'yang1314/',
  database:'test'
});

con.connect();  //connect之后就可以操作数据库了

/*opteration db*/

//查
//const sql='select * from books';
const sql='select * from books where book_id=?';
con.query(sql,[100],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});

//增
const sql='insert into books(book_id,title,status) values(?,?,?)';
con.query(sql,[2,'Node.js',0],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  } 
  console.log(result);
});

//改
const sql='update books set title=? where book_id=?';
con.query(sql,['MySQL Programming',2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});


//删
const sql='delete from books where book_id=?';
con.query(sql,[2],function(err,result){
  if(err){
    console.error(err);
    process.exit(100);
  }
  console.log(result);
});



//操作数据库的时候就能关闭了
con.end();
