var express = require('express');
var bodyparser =require('body-parse');
var ejs =require('ejs');


var pg = require('pg');
const conString = "postgres://postgres:1234567890@localhost:5432/postgres";
const client =new pg.Client(conString);
client.connect(function(err){
    console.log("error in connection"+err);
});
exports.save=(req,res)=>{
    const pro = {name :req.body.name,company:req.body.company,date:req.body.date};
    client.query(`insert into products.producttable(name,company,date) values(${pro.name},${pro.company},${pro.date}`,function(err ,data){
        if(err){
            console.log('error in inserting'+err);

        }
        else{
            console.log('data inserting  sucessfuly'+data)
        }
    })

};

exports.add =function(req,res){
    res.render('product/add',{title:"add product here"});
}
exports.list =function(req,res){
    client.query(`select * from products.producttable `,function(err,results){
        if(err){
            console.log('problem in list query',err);
       res.status(400).send(err);
        }
res.render('products/list')
    });
};

exports.edit =function(req,res){
    var id = req.params.id;
    client.query(`select * from products.producttable WHERE id=$1 `,[id],function(err,results){
        if(err){
            console.log('problem in list query',err);
       res.status(400).send(err);
        };
     res.render('products/edit')   ;
    });
}

exports.update= function(req,res){
var col =[req.body.name,req.body.company,req.body.date]
    client.query(`UPDATE  products.producttable WHERE name=$1,company=$2, date=$3`,col,function(err,results){
        if(err){
            res.status(400).send(err);
            console.log("err in update");
        };
        res.render('/products')
    });
} ;

exports.delete =function(req,res){
    var id = req.params.id;
    client.query(`DELETE * from products.producttable WHERE id=$1 `,[id],function(err,results){
        if(err){
            console.log('problem in delete query',err);
       res.status(400).send(err);
        };
     res.render('/products')   ;
    });
};




