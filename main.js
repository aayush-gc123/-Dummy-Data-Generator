const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose");
const Employee = require("./modules/Employed")
app.set('view engine', 'ejs');
const connect =  mongoose.connect("mongodb://localhost:27017/company")

app.get('/', (req, res) => {
    res.render('index', {foo: 'FOO'});
})

const getRandom = (arr) => {
const RanNum = Math.floor(Math.random() * (arr.length - 1))
return arr[RanNum]
}

app.get('/generate', async (req, res) => {
    
    // "Generate random data"/
    // clear the data
    await Employee.deleteMany({})

    const ranNames = ["Alex" , "Sayana" , "Harry" , "Elon" , "Mark" , "Tiger" , "Kala" , "Gora" ,"Mota"];
    const ranLng = ["English" , "Denis" , "Hindi" , "Portugis" , "Nepali","Chinis" , "Japanis"];
    const ranCity= ["Pokhara" , "Chitwan" , "Hary" , "new Delhi" , "Mumbai"];

    for (let i = 0; i <=10; i++) {
        const workers = await Employee.create({
            name: getRandom(ranNames),
            salary:Math.floor(Math.random()*23000),
            language:getRandom(ranLng),
            City:getRandom(ranCity),
            isManager:(Math.random()>0.5)?true:false

            // name:"Aayusy",
            // salary:9877,
            // language:"eng",
            //  City:"pokhara",
            //  isManager:true
        })

        
        console.log(workers)
    }
    res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})