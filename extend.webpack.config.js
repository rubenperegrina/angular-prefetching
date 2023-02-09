const { GuessPlugin } = require('guess-webpack');
const { parseRoutes } = require('guess-parser');

module.exports = {
  plugins: [
    new GuessPlugin({
      GA: 'XXXXXXXXX',
      runtime: {
        delegate: false
      },
      routeProvider() {
        return parseRoutes('.');
      }
    }),
  ]
};