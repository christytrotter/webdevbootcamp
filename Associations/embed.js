var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


//USER - email,name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.posts.push({
//     title:"How to bre polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });


// var newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflection on Apples",
//     content: "The are delicious"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

//To find the user
// User.findOne({name:"Hermione Granger"}, function(err, User){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(User);
//     }
// });

//To find a user and add a post
// User.findOne({name:"Hermione Granger"}, function(err, User){
//     if(err){
//         //console.log(err);
//     } else {
//         User.posts.push({
//             title: "3 Things I really hate",
//             content:"Voldemort Voldemort Voldemort"
//         });
//         User.save(function(err, User){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(User);
//             }
//         });
//     }
// });

var newUser = new User({
    email: "me@hogwarts.edu",
    name: "Me Granger"
});

newUser.posts.push({
    title:"How to ",
    content: "Just "
});

newUser.posts.push({
    title:" polyjuice potion",
    content: " class to learn it"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});
