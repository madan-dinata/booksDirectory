// validate
import Joi from "@hapi/joi";

// registration validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(255).required(),
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(4).max(1024).required(),
  });
  return schema.validate(data);
};

export { registerValidation };
