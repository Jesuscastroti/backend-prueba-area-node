import Joi from "joi";

export default {
    postCategoria: Joi.object().keys({
        nombreCategoria: Joi.string().required(),
    }),
};

