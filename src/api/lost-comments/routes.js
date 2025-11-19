const routes = (handler) => [
  {
    method: 'POST',
    path: '/losts/{id}/comments',
    handler: handler.postLostCommentHandler,
  },
];

module.exports = routes;
