const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': '#DA70D6' },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };