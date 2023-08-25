const path = require('path');
require('dotenv').config()

module.exports = {

  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: process.env.GITHUB_REPOSITORY_OWNER,
          name: process.env.GITHUB_REPOSITORY_NAME,
          token: process.env.GITHUB_TOKEN 
        },
        prerelease: false,
        draft: true
      }
    }
  ],

  packagerConfig: {
    asar: true,
    icon: path.join(__dirname, "assets", "icon")
  },

  rebuildConfig: {},

  makers: [
        {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "dualbase",
        version:'1.0.2',
        setupExe: "dualbase.exe",
        appIconPath: path.join(__dirname, "assets","icon.ico"),
        loadingGif: path.join(__dirname, "assets","cubi.gif"),
        iconUrl: "https://raw.githubusercontent.com/malept/electron-forge-demo123/forge6-issue-1635/assets/storm.ico",
        setupIcon: path.join(__dirname, "assets","icon.ico"),
        noMsi: true,
      },
    },

    {
      name: '@electron-forge/maker-deb',
      config: {},
    },

    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },

  ],


  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
