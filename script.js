const mongoose = require('mongoose');
const User = require("./user")


mongoose.connect("mongodb://localhost/josh")

run()
async function run(){

    try{
        const user = await User.create({
            name: 'josh', 
            age: 26,
            hobbies: ['coding', 'climbing', 'reading'],
            address: {
                street: '1303 Marie-Anne',
                city: 'Montreal'
            }})
        console.log(user);
    }
    catch(err){
        console.log(err);
    }
    
}

