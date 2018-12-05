/*框架代码*/

const db=require('./database.js');

var TodoList=function(){};

TodoList.prototype.addItem=function(item,cb){
  const sql='INSERT INTO todo(item) VALUES(?)';

  db.query(sql,[item],function(err,result){
    if(err){
      cb(true);
      return;
    }

    result.forEach((e)=>{ items.push(e);  });
    cd(false,items);
  });
};

TodoList.prototype.getAll=function(cb){
  const sql='SELECT * FROM todo';

  var items=[];
  db.query(sql,function(err,result){
    if(err){
      cb(true);
      return;
    }

    result.forEach((e)=>{ items.push(e); });
    cd(false,items);
  };

module.exports=TodoList;
