// validate
import Joi from "joi";

// registration validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(255).required(),
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(4).max(1024).required(),
    passwordConfirmation: Joi.string().equal(Joi.ref("password")).required().min(4).max(1024).label("Confirm password").messages({ "any.only": "{{#label}} does not match" }),
  });
  return schema.validate(data);
};

export { registerValidation };
