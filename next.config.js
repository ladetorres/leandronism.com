const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  assetPrefix: !debug ? '/https://leandronism.com' : '',
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
  images: {
    loader: "imgix",
    path: "",
  }
};
