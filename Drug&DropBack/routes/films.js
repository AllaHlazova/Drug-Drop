var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send({
        "data": [
            {
                "title": "Harry Potter and the Sorcerer's Stone",
                "genre": "fantasy, adventure",
                "rating": 7.6,
                "country": "USA, UK",
                "year": "2001"
            },
            {
                "title": "The Batman",
                "genre": "action, drama, crime",
                "rating": 3.6,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "Tenet",
                "genre": "thriller, crime, thriller",
                "rating": 8.5,
                "country": "USA, UK",
                "year": "2020"
            },
            {
                "title": "Avatar 2",
                "genre": "action, adventure, fantasy",
                "rating": 6.5,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "Sherlock Holmes 3",
                "genre": "action, detective, crime, adventure",
                "rating": 9.9,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "The Matrix 4",
                "genre": "action, adventure, thriller, fiction",
                "rating": 9.1,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "Avatar 2",
                "genre": "action, adventure, fantasy",
                "rating": 6.5,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "Sherlock Holmes 3",
                "genre": "action, detective, crime, adventure",
                "rating": 9.9,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "The Matrix 4",
                "genre": "action, adventure, thriller, fiction",
                "rating": 9.1,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "Sherlock Holmes 3",
                "genre": "action, detective, crime, adventure",
                "rating": 9.9,
                "country": "USA",
                "year": "2021"
            },
            {
                "title": "The Matrix 4",
                "genre": "action, adventure, thriller, fiction",
                "rating": 9.1,
                "country": "USA",
                "year": "2021"
            }
        ]
    });
});

module.exports = router;
