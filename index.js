import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

//homepage: index.ejs
app.get("/", (req, res) => {
    res.render("index.ejs", { blogEntries });
});

//create blog entry: postCreation.ejs
app.get("/create", (req, res) => {
    res.render("postCreation.ejs");
});

//receives from postCreation.ejs
app.post("/submit", (req, res) => {
    const newBlogPost = { title: req.body.postTitle, text: req.body.postText };
    blogEntries.push(newBlogPost);
    res.redirect("/");
});

//receives from index.ejs
//passes to postView.ejs
app.post("/view", (req, res) => {
    res.render("postView.ejs", { 
        title: req.body["title"],
        text: req.body["text"],
        index: req.body["index"],
     });
});

//receives from postView.ejs
//passes to postEdit.ejs
app.post("/edit", (req, res) => {
    res.render("postEdit.ejs", {
        title: req.body["title"],
        text: req.body["text"],
        index: req.body["index"],
    });
});

//receives from postEdit.ejs
app.post("/saveEdit", (req, res) => {
    const index = req.body.index;
    blogEntries[index] = { title: req.body.title, text: req.body.text };
    res.redirect("/");
})

//delete post button
app.post("/deletePost", (req, res) => {
    const index = req.body.index;
    blogEntries.splice(index, 1);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

const blogEntries = [];