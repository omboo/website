/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable radix */
const PacktrackerPlugin = require('@packtracker/webpack-plugin');
const withImages = require('next-images');

module.exports = {
  ...withImages(),
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (!isServer && process.env.GITHUB_EVENT_PATH) {
      const event = require(process.env.GITHUB_EVENT_PATH);
      config.plugins.push(
        new PacktrackerPlugin({
          upload: true,
          fail_build: true,
          branch: event.ref.replace('refs/heads/', ''),
          author: event.head_commit.author.email,
          message: event.head_commit.message,
          commit: process.env.GITHUB_SHA,
          committed_at: parseInt(+new Date(event.head_commit.timestamp) / 1000),
          prior_commit: event.before,
        }),
      );
    }
    return config;
  },
};
