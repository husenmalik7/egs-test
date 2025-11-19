const routes = (handler) => [
  {
    method: 'POST',
    path: '/losts',
    handler: handler.postLostHandler,
  },
  {
    method: 'PUT',
    path: '/losts/{id}',
    handler: handler.putLostHandler,
  },
  {
    method: 'GET',
    path: '/losts',
    handler: handler.getLostsHandler,
  },
  {
    method: 'GET',
    path: '/losts/{id}',
    handler: handler.getLostByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/losts/{id}',
    handler: handler.deleteLostItemByIdHandler,
  },
];

module.exports = routes;
