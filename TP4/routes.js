const express = require('express');
const router = express.Router();

module.exports = (router) => {

    //  Exercice 1
    router.get('/hello-world', (req, res) => {
        res.json({ message: 'Hello World !' });
    });

    // Exercice 2
    router.get('/message', (req, res) => {
        const msg = req.query.message;

        if (msg.length >= 20) {
            res.status(400).json({ message: 'Bad request' });
        }
        else {
            res.json({ message: msg});
        }
    });
    
     

    // Exercice 3
    router.post('/infos/headers', (req, res) => {
        res.json(req.headers);
    });

    // Eercice 4
    router.post('/user', (req, res) => {
        const date = req.body.birthday.split('/');
        const birthday = new Date(date[2], date[1], date[0]);
        const today = new Date();
        Math.floor((today-birthday)/31557600000) < 18 
        ? res.status(403).json({ message: 'Forbidden' })
        : res.status(200).json({ message: `Welcome : ${ req.body.firstname }` });
    });


    // Exercice 5
    router.get('/rick-roll', (req, res) => {
        res.redirect('https://youtu.be/dQw4w9WgXcQ');
    });

    // Exercice 6
    router.delete('/custom-header', (req, res) => {
        res.set('Message', 'Hello World !').json({ message: 'check Headers'});
    });

    // Exercice 8
    router.get('/params/:id/:key/:slug', (req, res) => {
    res.json({
        id: req.params.id,
        key: req.params.key,
        slug: req.params.slug
        });
    });

};  