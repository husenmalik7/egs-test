require('dotenv').config();

const {
  Hapi,
  Jwt,
  Inert,
  Boom,
  HttpError,

  schedules,
  SchedulesService,
  SchedulesValidator,
} = require('./import');

const init = async () => {
  const schedulesService = new SchedulesService();

  const apiKeyScheme = (server, options) => {
    return {
      authenticate: (request, h) => {
        const apiKey = request.headers['x-api-key'];
        if (!apiKey || apiKey !== options.apiKey) {
          throw Boom.unauthorized('Invalid API Key');
        }
        return h.authenticated({ credentials: { apiKey } });
      },
    };
  };

  const server = Hapi.server({
    port: process.env.PORT,
    host: '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: Jwt,
    },
    {
      plugin: Inert,
    },
  ]);

  server.auth.scheme('api-key', apiKeyScheme);
  server.auth.strategy('api_key_auth', 'api-key', {
    apiKey: 'SECRET123',
  });

  await server.register([
    {
      plugin: schedules,
      options: {
        service: schedulesService,
        validator: SchedulesValidator,
      },
    },
  ]);

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof HttpError) {
      const newResponse = h.response({
        status: response.status,
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    return h.continue;
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({ status: 'ok' }),
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
