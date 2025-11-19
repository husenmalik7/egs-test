const routes = (handler) => [
  {
    method: 'POST',
    path: '/founds',
    handler: handler.postFoundHandler,
  },
  {
    method: 'PUT',
    path: '/founds/{id}',
    handler: handler.putFoundHandler,
  },
  {
    method: 'GET',
    path: '/founds',
    handler: handler.getFoundsHandler,
  },
  {
    method: 'GET',
    path: '/founds/{id}',
    handler: handler.getFoundByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/founds/{id}',
    handler: handler.deleteFoundItemByIdHandler,
  },
];

module.exports = routes;
