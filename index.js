const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const objave = path.join(__dirname, 'data', 'posts.json');

app.get('/', (req, res) => {
    fs.readFile(objave, (err, posts) => { 
        res.render('home', {
            posts: JSON.parse(posts)
        });
    });
});

app.get('/post', (req, res) => {
    res.render('post-form');
});

app.post('/post', (req, res) => {
    const { title, picUrl, caption} = req.body;
    const put = path.join(__dirname, "data", "posts.json");
    fs.readFile(put, (err, posts) => {
        const updatedPosts =[{ title, picUrl, caption}, ...JSON.parse(posts)];
        fs.writeFile(put, JSON.stringify(updatedPosts), () => {
            res.redirect('/');
        })
    })
});

app.listen(5000);