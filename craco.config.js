module.exports = {
  jest: {
    configure: {
      collectCoverage: true,
      collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
        "!<rootDir>/path/to/dir/",
      ],
      coverageThreshold: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
  },
  plugins: [
    {
      plugin: require("craco-plugin-scoped-css"),
    },
  ],
};
