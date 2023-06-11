module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'de11a31e523ba6345d81f21cb6507894'),
    },
    watchIgnoreFiles: [
      "**/front-page"
    ]
  },
});
