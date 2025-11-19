const routes = (handler) => [
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'GET',
    path: '/users',
    handler: handler.getUserHandler,
  },
  {
    method: 'PUT',
    path: '/users',
    handler: handler.putUserHandler,
  },

  {
    method: 'GET',
    path: '/my/items',
    handler: handler.getMyItemsHandler,
  },
  {
    method: 'GET',
    path: '/my/lost-items',
    handler: handler.getMyLostItemsHandler,
  },
  {
    method: 'GET',
    path: '/my/found-items',
    handler: handler.getMyFoundItemsHandler,
  },
  {
    method: 'GET',
    path: '/my/achievements',
    handler: handler.getMyAchievementsHandler,
  },

  {
    method: 'GET',
    path: '/home',
    handler: handler.getHomeHandler,
  },
];

module.exports = routes;
