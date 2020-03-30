var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

//Conexao
var con = mysql.createConnection({
    host :'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'appFoods',
    multipleStatements: true

});
//Configuração Porta
var server = app.listen(4548,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});
//Conexão
con.connect(function(error){
    if(error) console.log("erro");
    else console.log("connected");
});
//Seleciona usuarios pelo nome
app.get('/users/:nome?',function(req,res){
try {
    con.query("select * from Users where nome = '"+[req.params.nome]+"'",function (error,rows,fields) {
        if (!req.params.nome) {
            res.send('Parametro errado => /users/nome');
            return;
        }
        if (rows.length == 0){
            res.send('null');
        }
        else{
            if(error){
                console.log(error);
                res.send('error');
            } 
            else{
                console.log(rows);
                res.send(rows);
            }
        }
        
    });
} catch (error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
} 
});


//Registro
app.get('/register/:name/:email/:idade', async (req, res, next) =>{

    try {
        con.query("select * from Users where nome = '"+[req.params.nome]+"'",function (error,rows,fields) {
            if (!req.params.nome) {
                res.send('Parametro errado => /users/nome');
                return;
            }
            if (rows.length == 0){
                res.send('null');
            }
            else{
                if(error){
                    console.log(error);
                    res.send('error');
                } 
                else{
                    console.log(rows);
                    res.send(rows);
                }
            }
            
        });
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    } 



    // try {
    //     con.query("INSERT INTO `Users` (`nome`,`email`,`idade`) VALUES ('"+req.params.name+"','"+req.params.email+"','"+req.params.idade+"')",function (error,rows,fields) {
    //         if(error){
    //             console.log(error);
    //             res.send('error');
    //         }
    //         else{
    //             console.log(rows);
    //             res.send('success');
    //         }
    //     });
    // } catch (error) {
    //     console.log('There has been a problem with your fetch operation: ' + error.message);
    // } 
});
