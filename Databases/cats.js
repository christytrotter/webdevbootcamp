var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to a DB

// var george = new Cat({
//     name: "Ms Norris",
//     age: 7,
//     temperament: "nice"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!");
//     } else{
//         console.log("WE JUST SAVED A CAT TO THE DB:");
//         console.log(cat);
//     }
// });

//retrueve all cats from the DB and console.log each one

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("All THE CATS.....");
        console.log(cats);
    }
});

//to make a new cat and save all at once

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});