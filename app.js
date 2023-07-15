const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

var items = ["Buy Food", "Eat Food", "Cook Food"];
var workItems = [];
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {


    var day = date.getDate();


    res.render("list", { listTitle: day, newItemList: items });
})

app.post("/", function (req, res) {
    console.log(req.body.newItem);
    var item = req.body.newItem;
    console.log(req.body);
    if (req.body.list == "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

})
app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newItemList: workItems })
})


app.listen(3000, function () {
    console.log("server started on 3000 port")
})