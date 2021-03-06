import { Router } from "express";
import validator from "../../../../middleware/validator";
import params from "../../../../middleware/params";
import schema from "./schema";
import { valid } from "joi";
const router = Router();
const articuloController = require("../../../../../controllers/articuloController");
export default function () {
    router.get("/getArticulos", params(), articuloController.getArticulos);
    router.post("/addArticulos/", validator(schema.postArticulos), articuloController.postArticulos);
    router.put("/editArticulos/", validator(schema.putArticulos), articuloController.putArticulos);
    router.delete("/deleteArticulo/:id",  params(), articuloController.deleteArticulo);
    return router;
}