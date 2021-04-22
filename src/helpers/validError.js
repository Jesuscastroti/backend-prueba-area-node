import { BadRequestError, InternalError, SuccessResponse } from "./api.response";
import { errorsPG} from "./constants";
export const validError = (error,res) => {
    let errorReturn;
    switch (error) {
        case errorsPG.syntaxError:
            errorReturn = BadRequestError(res, "Sintaxis de entrada no válida");
            break;
        case errorsPG.foreignKey:
            errorReturn = BadRequestError(res, "No se puede eliminar");
            break;
        case errorsPG.alreadyExists:
            errorReturn = BadRequestError(res, "Ya existe el registro", false);
            break;
        default:
            errorReturn = InternalError(res);
    }
    return errorReturn;
};