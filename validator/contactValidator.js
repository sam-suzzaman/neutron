const Joi = require("joi");

const ContactValidator = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email(),
    avatar: Joi.string().uri().required(),
    phoneNumber: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .required()
        .messages({
            "string.pattern.base":
                "Phone number must be a valid number between 10 and 15 digits.",
        }),
    address: Joi.string().min(3).max(100).required(),
});

export default ContactValidator;
