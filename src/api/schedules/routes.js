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
    method: 'GET',
    path: '/api/schedules/student',
    handler: handler.getStudentSchedulesHandler,
    options: {
      auth: 'api_key_auth',
    },
  },
  {
    method: 'GET',
    path: '/api/schedules/teacher',
    handler: handler.getTeacherSchedulesHandler,
    options: {
      auth: 'api_key_auth',
    },
  },
  {
    method: 'GET',
    path: '/api/schedules/report/rekap-jp',
    handler: handler.getReportHandler,
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
  {
    method: 'DELETE',
    path: '/api/schedules/{id}',
    handler: handler.deleteScheduleByIdHandler,
    options: {
      auth: 'api_key_auth',
    },
  },
  {
    method: 'PUT',
    path: '/api/schedules/{id}',
    handler: handler.putScheduleHandler,
    options: {
      auth: 'api_key_auth',
    },
  },
];

module.exports = routes;
