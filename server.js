var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
var md5 = require('md5');

//Conexao
var con = mysql.createConnection({
    host :'localhost',
    port:'8889',
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
    if(error) console.log(error);
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
//Login SELECT * FROM Users WHERE nome = 'name' AND senha = 'password'
app.post('/login',function(req,res){
  var user_name=req.body.user;
  let resultado = req.body.senha + req.body.name
  var passwordHashed = md5(resultado);
  try {
    con.query("SELECT * FROM Users WHERE nome = '"+user_name+"' AND senha = '"+passwordHashed+"'",function (error,rows,fields) {
        if (rows.length == 0){
            res.send('Login falho');
        }
        else{
            if(error){
                console.log(error);
                res.send('error');
            } 
            else{
                console.log(rows);
                res.send('sucess');
            }
        }
    });
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    } 
});
//register POST function, mandar $name $email $idade $senha $peso $objetivo frontend
app.post('/register',function(req,res){
    let resultado = req.body.senha + req.body.name
    let senhaHashed = md5(resultado);
    try {
        con.query("select * from Users where nome = '"+[req.body.name]+"'",function (error,rows,fields) {
            if (rows.length == 0){
                try {
                    con.query("INSERT INTO `Users` (`nome`,`email`,`idade`,`senha`,`peso`,`objetivo`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.idade+"','"+senhaHashed+"','"+req.body.peso+"','"+req.body.objetivo+"')",function (error,rows,fields) {
                        if(error){
                            console.log(error);
                            res.json({'error':error});
                        }
                        else{
                            console.log(rows);
                            res.json({'sucess':'usuario registrado'});
                        }
                    });
                } catch (error) {
                    res.json({'error':error});
                } 
            }
            else{
                if(error){
                    
                    res.json({'error':error});
                } 
                else{
                    console.log(rows);
                    res.json({'erro':'Usuario já existe'});
                }
            }
            
        });
    } catch (error) {
        res.json({'error':error});
    } 
})

