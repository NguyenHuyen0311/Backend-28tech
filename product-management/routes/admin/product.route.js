const express = require("express");
const multer = require("multer");
const router = express.Router();

const storageMulterHelper = require("../../helpers/storageMulter");
const storage = storageMulterHelper();

// Upload file ảnh
const upload = multer({ storage: storage });

const controller = require("../../controllers/admin/product.controller")

router.get("/", controller.index);

// Phương thức patch update 1 trường
router.patch("/change-status/:status/:id", controller.changeStatus);

// Phương thức patch update nhiều trường
router.patch("/change-multi", controller.changeMulti);

// Phương thức delete xóa sản phẩm
router.delete("/delete/:id", controller.deleteItem);

// Phương thức get thêm mới sản phẩm
router.get("/create", controller.create);

// Phương thức post thêm mới sản phẩm
router.post("/create", upload.single('thumbnail'), controller.createPost);

module.exports = router;