const routes = (handler) => [
  {
    method: 'POST',
    path: '/founds/{id}/comments',
    handler: handler.postFoundCommentHandler,
  },
];

module.exports = routes;
