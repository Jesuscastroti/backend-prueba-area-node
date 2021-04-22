import { Router } from "express";
import categoriasRoutes from "./categorias";
import articulosRoutes from "./articulos";
const router = Router();

export default function () {
    router.use("/categorias", categoriasRoutes());
    router.use("/articulos", articulosRoutes());
    return router;
}
