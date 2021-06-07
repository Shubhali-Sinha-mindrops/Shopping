const Pool = require('pg').Pool;
const express = require('express');
const app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shoppingproduct',
    password: 'root',
    port: 5432,
})

const getUser = (req,res) => {

    pool.query('SELECT * FROM users ORDER BY id ASC',(error,results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
};

const getUserById = (req,res) => {

    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM users WHERE id =$1', [id], (error,results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
};

const create = (req,res) => {
    const{ name, email, phone, address} =req.body;

    pool.query('INSERT INTO users (name, email, phone, address) VALUES ($1,$2,$3,$4)',[name,email,phone,address],(error,results) => {
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    })
}


module.exports = {
    getUser,
    getUserById,
    create,  
}