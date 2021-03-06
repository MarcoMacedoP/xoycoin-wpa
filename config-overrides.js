const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    Components: 'src/Components',
    Libs: 'src/Libs',
    Store: 'src/Store',
    Hooks: 'src/Hooks',
    Views: 'src/Views',
    Constants: 'src/Constants',
    Assets: 'src/Assets',
  })(config);

  return config;
};
