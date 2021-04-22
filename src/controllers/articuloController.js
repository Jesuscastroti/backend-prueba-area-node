import { BadRequestError, InternalError, SuccessResponse } from "../helpers/api.response";
import { createConectionPG } from "../helpers/connections";
import colors from "colors";
import Logger from "../helpers/Logger";
import * as querys from "../models/articulos/querys";
import { errorsPG} from "../helpers/constants";

//Listar los articulos
export const getArticulos = async(req,res) =>{
    const client = createConectionPG();
    try {
        await client.connect();
        const articulos = await client.query(querys.getArticulos);
        client.end();
        return SuccessResponse(res, "Success", true, {  articulos: articulos.rows } );
    } catch (error) {
        if (error.code === errorsPG.syntaxError) {
            return BadRequestError(res, "Sintaxis de entrada no válida");
        }
        Logger.error(colors.red("Error getArticulos "), error);
        InternalError(res);
    }
    
};


//Agregar los articulos
export const postArticulos= async (req, res) => {
    const client = createConectionPG();
    const {numeroRegistro, nombre, descripcion} = req.body;
    try {
        await client.connect();
        const articulos = await client.query(querys.addArticulos,[numeroRegistro, nombre, descripcion]);
        client.end();
        return SuccessResponse(res, "Success", true, {  message: 'Articulo agregado correctamente' } );
    } catch (error) {
        if (error.code === errorsPG.syntaxError) {
            return BadRequestError(res, "Sintaxis de entrada no válida");
        }
        Logger.error(colors.red("Error postArticulos "), error);
        InternalError(res);
    }
};
