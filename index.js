//console.log("Hello...");

const express = require('express')
const app = express()


//object.method('routName', cbfn(clientData, serverResponse))    //OOPs
app.get('/', function (req, res) {

    //object.method().method().method()....
    //res.status(202).json({'msg':'Hello World express'});

    res.json({'msg':'Hello World express'});
})

app.post('/login', function (req, res) {

    console.log(req.query);   // object.method() OR object.property

    console.log(req.query.name);
    console.log(req.query.surname);


    res.json(
        {
            'msg':'Hello World express',
            // 'name': req.query.name,
            // 'surname': req.query.surname
            'data': req.query

        }
    ); // object.method() OR object.property

    // res.send('Hello login');
  })
  

app.listen(3000)