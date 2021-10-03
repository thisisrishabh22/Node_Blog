const express = require("express");
const morgan = require("morgan");

// express app
const app = express();

app.set("view engine", "ejs");
 
// listen for requests
app.listen(process.env.PORT || 3000);

app.use(express.static("public"));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Title of an test blog. Title of an test blog.",
      snippet:
        "Lorem ispur dolor sit amet consectoruector. Lorem ispur dolor sit amet consectoruector.",
    },
    {
      title: "Title of an test blog. Title of an test blog. 2",
      snippet:
        "Lorem ispur dolor sit amet consectoruector. Lorem ispur dolor sit amet consectoruector.",
    },
    {
      title: "Title of an test blog. Title of an test blog. 3",
      snippet:
        "Lorem ispur dolor sit amet consectoruector. Lorem ispur dolor sit amet consectoruector.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Blog" });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/create", (req, res) => {
  res.redirect("/blogs/create");
});

app.get("/create-blog", (req, res) => {
  res.redirect("/blogs/create");
});

// 404 page
app.use((req, res) => {
  res.render("404", { title: "404 Error" });
});
