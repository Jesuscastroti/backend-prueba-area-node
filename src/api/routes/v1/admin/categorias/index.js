import { Router } from "express";
import validator from "../../../../middleware/validator";
import params from "../../../../middleware/params";
import schema from "./schema";
import { valid } from "joi";
const CategoriaController = require("../../../../../controllers/categoriaController");
const router = Router();

export default function () {
    router.get("/getCategorias/", params(), CategoriaController.getCategorias);
    return router;
};