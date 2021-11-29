// const debug = process.env.NODE_ENV !== 'production';
const debug = false;

module.exports = {
  // assetPrefix: !debug ? '' : '',
  assetPrefix: !debug ? '' : '',
  env: {
    PUBLIC_URL: "https://leandronism.com",
    assetPrefix: './'
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/first-blog": { page: "/first-blog" },
    }
  },
};
