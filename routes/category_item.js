const express = require('express');
const category = require('../models/category_item');
const router = express.Router();

router.post('/create_category/', (req, res) => {
    category.create({
        nama_kategori : req.body.nama_kategori   
    }).then( category => {
        res.json({
            "status" : "success",
            "message" : "data successfully been added",
            "data" : category
        })
    }).catch( err => {
        res.json(err)
    })
})

router.get('/get_category/', (req, res) => {
    category.findAll().then(category => {
        res.json(category);
    })
})

router.delete('/category/:id' , (req, res) => {
    category.destroy({
        where: {
            id : req.params.id
        }
    }).then(product => {
        res.json({
            "status" : "success",
            "message" : "Category Item has been successfully deleted",
            "data" : null
        })
    })
})

module.exports = router;