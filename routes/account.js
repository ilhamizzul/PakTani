const express = require('express');
const account = require('../models/account');
const pembeli = require('../models/pembeli');
const router = express.Router();

// router.post('/create_account/', (req, res) => {
//     account.create({
//         username : req.body.username,
//         password : req.body.password
//     }).then(acc => {
//         acc.createpembeli({
//             nama_pembeli : req.body.nama_pembeli,
//             alamat : req.body.alamat,
//             email : req.body.email,
//             no_telepon : req.body.no_telepon,
//             nik : req.body.nik
//         }).then(data => {
//             res.json({
//                 "status" : "success",
//                 "data" : data
//             })
//         }).catch(err => {
//             res.json(err);
//         })
//         // res.json({
//         //     "status" : "success",
//         //     "data" : acc
//         // })
//     }).catch(err => {
//         res.json(err);
//     })
// })
router.get('/account/:id', (req, res) => {
    account.findOne({
        include : [{
            model : pembeli,
            as : 'pembeli'
        }],
        where : {
            id : req.params.id
        }
    }).then(acc => {
        res.json({
            "data" : acc
        })
    })
})

router.get('/account/', (req, res) => {
    account.findAll({
        include:[
            {
                model: pembeli
            }
        ]
    }).then(result => {
        res.json({result});
    })
})

module.exports = router;