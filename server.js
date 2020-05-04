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
    console.log("start "+port);
});
//Conexão
con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

//sql querys
const selectAllFromUsers = "SELECT * FROM Users WHERE email = ? AND senha = ?";
const selectAllFromUsersWhereNome = "select * from Users where nome = ?";
const selectAllFromUsersWhereEmail = "select * from `Users` where email = ?";
const selectSemanaUm = "SELECT `idComida` FROM `relacaoComidasSemana` WHERE `idSemana`='1'";


app.get('/users/:nome?',function(req,res){
    try {
        con.query(selectAllFromUsersWhereNome,[req.params.nome],function (error,rows,fields) {
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
//no lugar das var colocar ? e no fim da query passar array de valores con.query("SELECT * FROM Users WHERE e-mail=? AND senha=?", [req.body.name, req.body.password]);
app.post('/login',function(req,res){
    let resultado = req.body.senha + req.body.email
    var passwordHashed = md5(resultado);
    try {
      con.query(selectAllFromUsers,[req.body.email,passwordHashed],function (error,rows,fields) {
          if (rows.length == 0){
              res.status(203).send('Login falho');
          }
          else{
              if(error){
                  console.log(error);
                  res.status(500).send('error');
              } 
              else{
                  console.log(rows);
                  res.status(201).json({'success':rows});
              }
          }
      });
      } catch (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      } 
});
//register POST function, mandar $name $email $idade $senha $peso $objetivo frontend
app.post('/register',function(req,res){
    let resultado = req.body.senha + req.body.email
    let senhaHashed = md5(resultado);
    let data = req.body.dataNascimento;
    try {
        con.query(selectAllFromUsersWhereEmail,[req.body.email],function (error,rows,fields) {
            if (rows.length == 0){
                try {
                    con.query("INSERT INTO `Users` (`nome`,`email`,`senha`,`peso`,`objetivo`, `altura`,`dataNascimento`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+senhaHashed+"','"+req.body.peso+"','"+req.body.objetivo+"','"+req.body.altura+"','"+data+"')",function (error,rows,fields) {
                        if(error){
                            console.log(error);
                            res.status(500).json({'error':error});
                        }
                        else{
                            console.log(rows);
                            res.status(201).json({'success':'usuario registrado'});
                        }
                    });
                } catch (error) {
                    res.status(500).json({'error':error});
                } 
            }
            else{
                if(error){
                    
                    res.status(500).json({'error':error});
                } 
                else{
                    console.log(rows);
                    res.status(203).json({'erro':'Usuario já existe'});
                }
            }
            
            
        });
    } catch (error) {
        res.status(500).json({'error':error});
    } 
})
app.post('/insertFood',function(req,res){
    let nome = req.body.nome
    let carboidratos = req.body.carboidratos
    let gordura = req.body.gordura
    let proteina = req.body.proteina
    let descricao = req.body.descricao
    let semana  = req.body.semana
    let lastId = 0
    try {
        con.query("INSERT INTO `comidas`(`nome`, `carboidratos`, `proteinas`, `gorduras`, `descricao`) VALUES ('"+nome+"','"+carboidratos+"','"+proteina+"','"+gordura+"','"+descricao+"');SELECT `id` AS LastID FROM `comidas` WHERE `id` = @@Identity;",function (error,rows,fields) {
            if(error){
                res.json({'error':error});
            } 
            else{
                rows[1].forEach(element => {
                    lastId = element["LastID"]
                });
                con.query("INSERT INTO `relacaoComidasSemana`(`idComida`, `idSemana`) VALUES ('"+lastId+"','"+semana+"')",function (error,rows,fields) {
                    if(error){
                        res.json({'error':error});
                    } 
                    else{
    
                        res.json({"success":rows});
                    } 
                })
            }
            
            
        });
    } catch (error) {
        res.json({'error':error});
    } 
})
app.get('/listaComidas',function(req,res){
    let idsComidas = []
    try {
        con.query(selectSemanaUm,function (error,rows,fields) {
            if(error){
                res.json({'error':error});
            } 
            else{
                rows.forEach(element => {
                    idsComidas.push(element["idComida"])
                });
                con.query("SELECT `nome`,`carboidratos`,`proteinas`,`gorduras`,`descricao` FROM `comidas` WHERE `id` IN ("+String(idsComidas).split(",")+")",function (error,rows,fields) {
                    if(error){
                        res.json({'error':error});
                    } 
                    else{
                        res.json({'comidas':rows})   
                    }
                });
            }
            
        });
    } catch (error) {
        res.json({'error':error});
    } 
})