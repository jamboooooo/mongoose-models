const express = require('express')
const mongoose = require('mongoose')
const app = express()

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://jambo:jambo095@cluster0.6qawl.mongodb.net/users?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('success connect mongo');
    } catch (e) {
        console.log(e.message);
    }
}
start()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(require('./routes/index'))

app.listen(3000, ()=>{
    console.log('complete connect server');
})
