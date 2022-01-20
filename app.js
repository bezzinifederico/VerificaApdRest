var fs = require('fs');
var express = require('express'); 
var DataBook = require('/package.json');
const { request } = require('express');
var app = express();


function LoginGET (request) {
    if (request.path != "/login") { return false; }
    if ( request.method != "GET" ) { return false; }
    return true;
} 

function RichiediAccesso (request) {
   
    if (request.headers.accessToken != "Benvenuto") {
        return false;
    }
    return true;
} 

app.use (function(request, response, next) {
    if (! LoginGET (request) ) {
        if (! RichiediAccesso (request) ){
            response.writeHead(101);// non autorizzato  
            response.send();
            return; // non va avanti
        }
    } else {
        console.log (" loggati prima ");
    }
    next(); 
});

app.get('/login', function(request, response){
    var mail = request.query.mail;
    var password = request.query.password;
    response.setHeader ("Benvenuto");
    response.writeHead(200); 
    response.send();
});



app.put('/DataBook', function (request,response){
    var bookData = JSON.parse (request.body);

    DataBook.newBook(bookData, function (err) {
        if (err) {
            response.writeHead(409);
            response.send();
            return;
        }
        response.writeHead(200);
        response.send();
    });

    //aggiunta di un contatto
apiServer.get("/Aggiugi meet",(request,response) => {
    const meet = request.query.meet;
    console.log(meet);
   response.send('meet aggiunto');
});

    //modifica di un meet
 apiServer.post('/Modifica meet dal nome univoco', (request, response) => {

    const univocname = response.params.univocname;
    const newMeet = request.body;

    for (let i = 0; i < meet.length; i++) {
        let meet = meet[i]
        if (meet.univocname === univocname) {
            univocname[i] = newMeet;
        }
    }

    response.send('meet è stato editato con successo');
});

apiServer.post('/Modifica meet dal odg', (request, response) => {

    const odg = response.params.odg;
    const newMeet = request.body;

    for (let i = 0; i < meet.length; i++) {
        let meet = meet[i]
        if (meet.odg ===odg) {
            odg[i] = newMeet;
        }
    }

    response.send('meet è stato editato con successo');
});

apiServer.post('/Modifica meet dalla data ', (request, response) => {

    const data = response.params.data;
    const newMeet = request.body;

    for (let i = 0; i < meet.length; i++) {
        let meet = meet[i]
        if (meet.data ===data) {
            data[i] = newMeet;
        }
    }

    response.send('meet è stato editato con successo');
});


apiServer.post('/Modifica meet dall ora ', (request, response) => {

    const data = response.params.ora;
    const newMeet = request.body;

    for (let i = 0; i < meet.length; i++) {
        let meet = meet[i]
        if (meet.ora === ora) {
            ora[i] = newMeet;
        }
    }

    response.send('meet è stato editato con successo');
});

    // cancellazione meet
    app.delete('/cancellazione meet', (request, response) => {
    
        const meet = request.params.univocname.odg.data.ora;
        meet = meet.filter(i => {
            if (i.meet !== meet) {
                return true;
            }
            return false;
        });
    
        response.send('eliminato il meet');
    });
    
});

