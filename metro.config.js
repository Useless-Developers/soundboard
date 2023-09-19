// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require("path");

const projectRoot = __dirname;

// Create the default Metro config
const config = getDefaultConfig(projectRoot);

// Add import aliases
config.resolver.alias = {
  "@": path.resolve(projectRoot, "src"),
};

module.exports = config;
