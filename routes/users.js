const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('users')
})

router.get('/new', (req, res) => {
    res.send("USER NEW FORM")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    res.send(`Get User with id: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update User with id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User with id: ${req.params.id}`)
})




module.exports = router;