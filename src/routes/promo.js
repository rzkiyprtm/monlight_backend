const express = require("express");
const promosRouter = express.Router();
const isLogin = require("../middleware/isLogin")
const uploads = require("../middleware/upload")
const allowedRoles = require("../middleware/allowedRole");

const {get, post, patch, clear, search, getPromoById} = require("../controller/promo")

promosRouter.get("/get/", get);

promosRouter.get("/:id", getPromoById)

promosRouter.post("/", isLogin(), allowedRoles("Admin"), uploads, post);

promosRouter.patch("/:id", isLogin(), allowedRoles("Admin"), uploads, patch);

promosRouter.delete("/:id", clear);

promosRouter.get("/", search);

module.exports = promosRouter;

