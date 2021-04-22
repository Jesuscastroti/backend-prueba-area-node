import Joi from "joi";

export default {
    postCategoria: Joi.object().keys({
        nombreCategoria: Joi.string().required(),
    }),
    putCategoria: Joi.object().keys({
        nombreCategoria: Joi.string().required(),
        id: Joi.string().required(),
    }),
};

