module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b6808b5e1a76f7b102871f37ae6b9c8b'),
  },
});
