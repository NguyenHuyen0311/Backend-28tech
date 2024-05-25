const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller")

router.get("/", controller.index); 

// Phương thức patch update 1 trường
router.patch("/change-status/:status/:id", controller.changeStatus); 

// Phương thức patch update nhiều trường
router.patch("/change-multi", controller.changeMulti);

// Phương thức delete xóa sản phẩm
router.delete("/delete/:id", controller.deleteItem);

module.exports = router;