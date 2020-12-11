const path = require('path');

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      public: path.resolve(__dirname, '../public/'),
      components: path.resolve(__dirname, '../components/'),
      containers: path.resolve(__dirname, '../containers/'),
      utils: path.resolve(__dirname, '../utils/'),
      layout: path.resolve(__dirname, '../layout/'),
      interfaces: path.resolve(__dirname, '../interfaces/'),
      stores: path.resolve(__dirname, '../stores/'),
      api: path.resolve(__dirname, '../api/'),
    };
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
