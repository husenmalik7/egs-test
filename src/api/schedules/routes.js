const routes = (handler) => [
  {
    method: 'GET',
    path: '/api/schedules',
    handler: handler.getSchedulesHandler,
    options: {
      auth: 'api_key_auth',
    },
  },
  {
    method: 'POST',
    path: '/api/schedules',
    handler: handler.postScheduleHandler,
    options: {
      auth: 'api_key_auth',
    },
  },
];

module.exports = routes;
