const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.get('/', logger, (req, res) => {
    res.render('index', {
        text: 'world'
    })
})

const userRouter = require('./routes/users');

app.use("/users", userRouter)

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000)

