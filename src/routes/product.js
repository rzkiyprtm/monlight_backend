const express = require("express");
const productsRouter = express.Router();
const upload = require("../middleware/upload")
const cloudinaryUpload = require("../middleware/cloudinary");
const allowedRoles = require("../middleware/allowedRole");
const {get, post, patch, clear, search, filter, sort, getById} = require("../controller/product");
const login = require("../middleware/isLogin")

productsRouter.get("/sort", sort); /*ini routing sort*/

productsRouter.get("/get", get);

productsRouter.get("/:id", getById);

productsRouter.get("/:category", filter)

productsRouter.get("/", search);

productsRouter.post("/", login(), allowedRoles("Admin"), upload, cloudinaryUpload, post);

productsRouter.patch("/:id", upload, cloudinaryUpload, patch); // belum dikasih middleware kayak yg atas

productsRouter.delete("/:id", clear);




module.exports = productsRouter;
