const routes = (handler) => [
  {
    method: 'GET',
    path: '/api/schedules',
    handler: handler.getSchedulesHandler,
  },
  {
    method: 'POST',
    path: '/api/schedules',
    handler: handler.postScheduleHandler,
  },
];

module.exports = routes;
