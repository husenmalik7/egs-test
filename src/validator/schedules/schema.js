const Joi = require('joi');

const SchedulePayloadSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = { SchedulePayloadSchema };
