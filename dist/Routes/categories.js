"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
var category_1 = require("../Controller/category");
router.get("/getCategory", category_1.GetCategory);
router.post("/creatCategory", category_1.CreateCategory);
router.delete("/deleteCategory/:id", category_1.DeleteCategory);
router.put("/updatCategory/:id", category_1.UpdatCategory);
module.exports = router;
