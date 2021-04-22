import { BadRequestError, InternalError, SuccessResponse } from "../helpers/api.response";
import { createConectionPG } from "../helpers/connections";
import colors from "colors";
import Logger from "../helpers/Logger";
import * as querys from "../models/Categorias/query";
import { errorsPG} from "../helpers/constants";

//Listar las categorias
export const getCategorias = async (req, res) => {
    const client = createConectionPG();
    try {
        await client.connect();
        const categorias = await client.query(querys.getCategorias);
        client.end();
        return SuccessResponse(res, "Success", true, {  categorias: categorias.rows } );
    } catch (error) {
        if (error.code === errorsPG.syntaxError) {
            return BadRequestError(res, "Sintaxis de entrada no válida");
        }
        Logger.error(colors.red("Error getCategorias "), error);
        InternalError(res);
    }
};

//Agregar las categorias
export const postCategorias = async (req, res) => {
    const client = createConectionPG();
    const {nombreCategoria} = req.body;
    try {
        await client.connect();
        const categorias = await client.query(querys.addCategoria,[nombreCategoria]);
        client.end();
        return SuccessResponse(res, "Success", true, {  message: 'Categoria agregada correctamente' } );
    } catch (error) {
        if (error.code === errorsPG.syntaxError) {
            return BadRequestError(res, "Sintaxis de entrada no válida");
        }
        Logger.error(colors.red("Error postCategorias "), error);
        InternalError(res);
    }
};
//Actualizar las categorias
export const putCategorias = async (req, res) => {
    const client = createConectionPG();
    const {id,nombreCategoria} = req.body;
    try {
        await client.connect();
        const verificarcategoria = await client.query(querys.getCategoriasId,[id])
        if(verificarcategoria.rows.length > 0){
            const categorias = await client.query(querys.editCategoria,[nombreCategoria,id]);
            client.end();
            return SuccessResponse(res, "Success", true, {  message: 'Categoria actualizada correctamente' } );
        }else{
            client.end();
            return SuccessResponse(res, "Success", false, {  message: 'No existe una categoria con ese id' } );
        }
        
    } catch (error) {
        if (error.code === errorsPG.syntaxError) {
            return BadRequestError(res, "Sintaxis de entrada no válida");
        }
        Logger.error(colors.red("Error putCategorias "), error);
        InternalError(res);
    }
};
