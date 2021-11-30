const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController")
const AuthController = require("../controllers/AuthController");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.get("/users", UserController.index);
router.get("/users/:id", UserController.find);
router.patch("/users", authMiddleware, UserController.update);

router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

module.exports = router;