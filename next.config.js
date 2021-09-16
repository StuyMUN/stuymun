const debug = process.env.NODE_ENV !== "production";
const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    basePath:  !debug ? '/stuymun-fork' : '',
    assetPrefix: !debug ? '/stuymun-fork' : '',
    images: {
      loader: "imgix",
      path: "",
    },
    trailingSlash: true,
    reactStrictMode: true,
}