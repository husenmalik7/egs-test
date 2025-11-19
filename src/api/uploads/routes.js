const path = require('path');

const routes = (handler) => [
  // users
  {
    method: 'POST',
    path: '/users/picture',
    handler: handler.postUploadUserPictureHandler,
  },
  {
    method: 'GET',
    path: '/users/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    },
  },

  // losts
  {
    method: 'POST',
    path: '/losts/{id}/picture',
    handler: handler.postUploadLostPictureHandler,
  },
  {
    method: 'GET',
    path: '/losts/{id}/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    },
  },

  // founds
  {
    method: 'POST',
    path: '/founds/{id}/picture',
    handler: handler.postUploadFoundPictureHandler,
  },
  {
    method: 'GET',
    path: '/founds/{id}/{param*}',
    handler: {
      directory: {
        path: path.resolve(__dirname, 'file'),
      },
    },
  },
];

module.exports = routes;
