const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
);

module.exports = withNextIntl({
    reactStrictMode: false,
    output: process.env.BUILD_STANDALONE ? 'standalone' : undefined,
    images: {
        domains: ['localhost'],
    },

});
