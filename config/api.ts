export default ({ env }) => ({
  responses: {
    privateAttributes: ['id'],
  },
  rest: {
    prefix: '/api',
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
});
