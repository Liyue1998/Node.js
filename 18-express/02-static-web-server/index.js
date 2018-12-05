#!/usr/bin/node 

const express=require('express');
const app=express();

app.use(express.static('.'));  //提供静态文件服务
app.listen(8080);
