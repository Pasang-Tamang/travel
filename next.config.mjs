/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  //trailingSlash: true,

  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "window.jQuery": "jquery",
  //     })
  //   );
  //   return config;
  // },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "destination.missionsummittreks.com/",
  //       // port: '',
  //       pathname: "images/",
  //     },
  //   ],
  // },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/styles.scss";`,
  },
};

export default nextConfig;
