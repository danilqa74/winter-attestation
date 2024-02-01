const packageJson = require('../package.json')


const moduleFederationConfig = {
  name: 'list_item',
  filename: 'remoteEntry.js',
  exposes: {
    './ListItem': './src/App',
  },
  shared: {react: {singleton: true}, "react-dom": {singleton: true}},
};

module.exports = {
  moduleFederationConfig,
};
