const md5 = require("md5");

const User = require("../../models/user.model");

// [GET] /user/register
module.exports.register = async (req, res) => {
    res.render("client/pages/user/register", {
        pageTitle: "Đăng ký tài khoản",
    });
};

// [POST] /user/register
module.exports.registerPost = async (req, res) => {
    // console.log(req.body);
    const existEmail = await User.findOne({
        email: req.body.email,
        deleted: false
    }); // kiểm tra tồn tại email chưa

    if(existEmail) {
        req.flash("error", `Email đã tồn tại!`);
        req.redirect("back");
        return;
    }

    req.body.password = md5(req.body.password);

    const user = new User(req.body);

    await user.save();

    // console.log(user);
    res.cookie("tookenUser", user.tokenUser);

    res.redirect("/");
};