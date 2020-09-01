const PacktrackerPlugin = require('@packtracker/webpack-plugin');
const withImages = require('next-images');

module.exports = {
  ...withImages(),
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.GITHUB_EVENT_PATH) {
      config.plugins.push(new PacktrackerPlugin({ upload: true }));
    }
    return config;
  },
};
