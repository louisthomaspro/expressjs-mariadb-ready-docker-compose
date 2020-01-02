const express = require('express')
const app = express()




const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'mariadb',
    user: 'root',
    password: 'example',
    database: 'mabddpourletest',
    port: 3306,
    connectionLimit: 5
});



app.get('/book/:id', function (req, res) {
    console.log(req.params.id)
    console.log("get detect")
    pool.getConnection()
        .then(conn => {
            
            conn.query('SELECT * from book LIMIT ?', [Number(req.params.id)])
                .then((rows) => {
                    res.send(rows)
                })
                .catch(err => {
                    console.log(err);
                    conn.end();
                })

        }).catch(err => {
            console.log(err)
        });
})

app.listen(3000)
console.log("c'est parti!!")