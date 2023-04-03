const mongoose = require('mongoose');
const User = require("./user")


mongoose.connect("mongodb://localhost/testDB")

run()
async function run(){
    const user = await User.create({name: 'josh', age: 26})
    console.log(user);
}

