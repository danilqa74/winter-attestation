const packageJson = require('../package.json')



const moduleFederationConfig = {
  name: 'host',
  remotes: {
    list: 'list@//localhost:3001/remoteEntry.js',
  },
  shared: {react: {singleton: true}, "react-dom": {singleton: true}},
};

module.exports = {
  moduleFederationConfig,
};
