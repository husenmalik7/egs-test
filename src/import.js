const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
const Inert = require('@hapi/inert');
const Boom = require('@hapi/boom');

const HttpError = require('./exceptions/HttpError');

const schedules = require('./api/schedules');
const SchedulesService = require('./services/postgres/SchedulesService');
const SchedulesValidator = require('./validator/schedules');

module.exports = {
  Hapi,
  Jwt,
  Inert,

  Boom,
  HttpError,

  schedules,
  SchedulesService,
  SchedulesValidator,
};
