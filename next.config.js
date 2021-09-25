const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // basePath:  process.env.NEXT_PUBLIC_BASE_PATH || '',
    images: {
      loader: "imgix",
      path: "",
    },
    trailingSlash: true,
    reactStrictMode: true,
}
