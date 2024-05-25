const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/products-test-28tech");

const Product = mongoose.model('Product', { 
    title: String, 
    price: Number, 
    title: String 
});

const port = 3000;

// PUG
app.set("views", "./views");
app.set("view engine", "pug");

// Static files and CSS
app.use(express.static("public"));

app.get("/", (req, res) => {
    // res.send(
    // `
    //     <h1>Trang Chủ</h1>
    //     <h2>Tiêu đề trang chủ</h2>
    //     <p>Nội dung trang chủ</p>
    // `
    // );

    res.render("index.pug", { 
        titlePage: "Trang Chủ"
    });
});

app.get("/about", (req, res) => {
    res.render("about", { 
        titlePage: "Trang giới thiệu"
    });
});

app.get("/products", async (req, res) => {
    const products = await Product.find({});

    console.log(products);

    res.render("products", { 
        titlePage: "Trang danh sách sản phẩm",
        products: products
    });
});

app.get("/blog", (req, res) => {
    res.send("<h1>Trang danh sách bài viết</h1>");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
