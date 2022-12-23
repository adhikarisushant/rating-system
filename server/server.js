require('dotenv').config();
const express = require('express');
const db = require('./db');

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
// get all restaurants
app.use(express.json());
app.get('/api/v1/restaurants', async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    } catch (err) {
        console.log(err)
    }
});

// get a restaurant
app.get('/api/v1/restaurants/:id', async (req, res) => {
    try {   
        const results = await db.query("select * from restaurants where id = $1", [req.params.id])
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows[0],
            }
        })
    } catch(err) {
        console.log(err);
    }


});

// post a restaurant
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "mcdonald",
        }
    })
})

// update a restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonald",
        }
    })
})

// delete a restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(204).json({
        status: "success",   
    })
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
    console.log(`server is up and listening at ${port}`);
})