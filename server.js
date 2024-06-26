const express = require('express');
const app = express();
const cors = require('cors');

const dbService = require('./database');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// create
app.post('/insert', (request, response) => {
    const { name,nickname, age, bio } = request.body;
    const db = dbService.getDbServiceInstance();
    
    const result = db.insertNewName(name,nickname, age, bio);

    result
    .then(data => response.json({ data: data}))
    .catch(err => console.log(err));
});

// read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

// update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

// delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));


    app.get('/search/:id', (request, response) => {
        const {id} = request.params;
        const db = dbService.getDbServiceInstance();
    
        const result = db.getByid(id);
        
        result
        .then(data => response.json({data : data}))
        .catch(err => console.log(err));
    })
    



});


app.listen(5000, () => console.log('app is running!!'));
/*

      app.get('/search/:id', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(id);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})


      */
