/*Implementing Features
Implement the post edit feature. This includes using a form to load the existing blog post and allowing the user to edit and save the post.
Implement the delete feature. This allows the user to click a button and remove the post from the home page.
Test the application to ensure that post creation and viewing are working correctly.

Styling and Polishing
Style the application. This includes creating a CSS file, linking it to your EJS templates, and writing CSS or using Bootstrap/Flexbox/Grid to style the application.
Test the application on different devices and browsers to ensure the styling works correctly.
Fix any bugs or issues that came up during testing. */

import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { blogEntries });
});

app.get("/create", (req, res) => {
    res.render("postCreation.ejs");
});

app.post("/submit", (req, res) => {
    const newBlogPost = { title: req.body.postTitle, text: req.body.postText };
    blogEntries.push(newBlogPost);
    console.log(blogEntries[0].title);
    res.redirect("/");
});

app.post("/view", (req, res) => {
    res.render("postView.ejs", { 
        title: req.body["title"],
        text: req.body["text"],
     });
});

app.post("/edit", (req, res) => {
    res.render("postEdit.ejs", {
        title: req.body["title"],
        text: req.body["text"],
    });
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

const blogEntries = [];