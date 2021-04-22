import Joi from "joi";

export default {
    postArticulos: Joi.object().keys({
        numeroRegistro: Joi.string().required(),
        nombre: Joi.string().required(),
        descripcion: Joi.string().required(),
    }),
};