var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));


var con = mysql.createConnection({
    host :'localhost',
    port:'8889',
    user:'root',
    password:'root',
    database:'appFoods'
});

var server = app.listen(4548,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("start");
});

con.connect(function(error){
    if(error) console.log("erro");
    else console.log("connected");
});

app.get('/users',function(req,res){
try {
    con.query('select * from Users',function (error,rows,fields) {
        if(error) console.log(error);
        else{
            console.log(rows);
            res.send(rows);
        }
    });
} catch (error) {
    console.log('There has been a problem with your fetch operation: ' + error.message);
} 
});

app.get('/insertUser/:name/:email/:idade', async (req, res, next) =>{
    try {
        con.query("INSERT INTO `Users` (`nome`,`email`,`idade`) VALUES ('"+req.params.name+"','"+req.params.email+"','"+req.params.idade+"')",function (error,rows,fields) {
            if(error) console.log(error);
            else{
                console.log(rows);
                res.send('success');
            }
        });
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    } 
});
