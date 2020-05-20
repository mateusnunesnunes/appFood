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
    port:'3307',
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
    console.log("Server login")
    let resultado = req.body.senha + req.body.email
    var passwordHashed = md5(resultado);
    try {
      con.query(selectAllFromUsers,[req.body.email,passwordHashed],function (error,rows,fields) {
          if (rows.length == 0){
              res.status(203).json({'falho':"erro"});
          }
          else{
              if(error){
                  console.log(error);
                  res.status(500).json({'falho':"erro"});
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
                    con.query("INSERT INTO `Users` (`nome`,`email`,`senha`,`peso`,`objetivo`, `altura`,`dataNascimento`,`foto`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+senhaHashed+"','"+req.body.peso+"','"+req.body.objetivo+"','"+req.body.altura+"','"+data+"','"+req.body.foto+"')",function (error,rows,fields) {
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
//insertFood ->   nome, carboidrato, gordura, gordura, proteina, descricao
const insertComidas = "INSERT INTO `comidas`(`nome`, `carboidratos`, `proteinas`, `gorduras`, `descricao`) VALUES ?;"
const getlastIdComida = "SELECT `id` AS LastID FROM `comidas` WHERE `id` = @@Identity;"
const insertIntoRelacaoComidas = "INSERT INTO `relacaoComidasSemana`(`idComida`, `idSemana`) VALUES ?;"
app.post('/insertFood',function(req,res){
    let data = req.body;
    let values = [];
    let ids = []
    data.forEach(val =>{
        let localList = [];
        localList.push(val.nome);
        localList.push(val.carboidratos);
        localList.push(val.proteina);
        localList.push(val.gordura);
        localList.push(val.descricao);
        values.push(localList);
    })
    let tamanhoData = values.length;
    let firstId = 0;
    try {
        con.query(insertComidas+getlastIdComida,[values],function (error,rows,fields) {
            if(error){
                res.json({'error':error});
            } 
            else{
                rows[1].forEach(element => {
                    firstId = element["LastID"];   
                });
                for (let i = firstId; i < firstId+tamanhoData; i++) {
                    let localArray = [];
                    localArray.push(i);
                    localArray.push(1);
                    ids.push(localArray);
                }
                console.log("ids dps for = "+ids)
                con.query(insertIntoRelacaoComidas,[ids],function (error,rows,fields) {
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

    

    // let nome = req.body.nome
    // let carboidratos = req.body.carboidratos
    // let gordura = req.body.gordura
    // let proteina = req.body.proteina
    // let descricao = req.body.descricao
    // let lastId = 0
    // try {
    //     con.query("INSERT INTO `comidas`(`nome`, `carboidratos`, `proteinas`, `gorduras`, `descricao`) VALUES ('"+nome+"','"+carboidratos+"','"+proteina+"','"+gordura+"','"+descricao+"');SELECT `id` AS LastID FROM `comidas` WHERE `id` = @@Identity;",function (error,rows,fields) {
    //         if(error){
    //             res.json({'error':error});
    //         } 
    //         else{
    //             rows[1].forEach(element => {
    //                 lastId = element["LastID"]
    //             });
    //             console.log("ULTIMO ID = "+lastId);
    //             con.query("INSERT INTO `relacaoComidasSemana`(`idComida`, `idSemana`) VALUES ('"+lastId+"',1)",function (error,rows,fields) {
    //                 if(error){
    //                     res.json({'error':error});
    //                 } 
    //                 else{
    //                     res.json({"success":rows});
    //                 } 
    //             })
    //         }
            
            
    //     });
    // } catch (error) {
    //     res.json({'error':error});
    // } 
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
