const SchedulesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'schedules',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const schedulesHandler = new SchedulesHandler(service, validator);
    server.route(routes(schedulesHandler));
  },
};
