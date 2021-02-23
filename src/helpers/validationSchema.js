const Joi = require("joi");

export const newMovieSchema = Joi.object().keys({
  Title: Joi.string().min(2).max(30).required(),
  "Number in Stock": Joi.number().integer().min(1).max(100),
  "Daily Rental Rate": Joi.number().min(0).max(10),
});
