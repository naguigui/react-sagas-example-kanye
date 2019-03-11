module.exports = function config(api) {
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-syntax-dynamic-import"
  ];

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: [">0.25% in US"]
        },
        useBuiltIns: "entry"
      }
    ],
    "@babel/preset-react"
  ];

  if (api.env("test")) {
    plugins.push("@babel/plugin-transform-modules-commonjs");
  }

  return {
    plugins,
    presets
  };
};
