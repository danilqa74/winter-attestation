const packageJson = require('../package.json')


const moduleFederationConfig = {
  name: 'list',
  filename: 'remoteEntry.js',
  exposes: {
    './TodoList': './src/todo-list',
  },
  remotes: {
    list_item: 'list_item@//localhost:3002/remoteEntry.js',
  },
  shared: {react: {singleton: true}, "react-dom": {singleton: true}},
};

module.exports = {
  moduleFederationConfig,
};
