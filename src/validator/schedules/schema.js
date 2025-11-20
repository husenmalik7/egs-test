const Joi = require('joi');

const SchedulePayloadSchema = Joi.object({
  class_code: Joi.string().max(10).required(),
  class_name: Joi.string().max(10).required(),
  subject_code: Joi.string().max(10).required(),
  teacher_nik: Joi.string().max(20).required(),
  teacher_name: Joi.string().max(100).required(),
  date: Joi.date().iso().required(),
  jam_ke: Joi.number().integer().min(1).required(),
  time_start: Joi.string()
    .pattern(/^\d{2}:\d{2}:\d{2}$/)
    .required(),
  time_end: Joi.string()
    .pattern(/^\d{2}:\d{2}:\d{2}$/)
    .required(),
});

module.exports = { SchedulePayloadSchema };
