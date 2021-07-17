'use strict';
const path = require('path');
module.exports = app => {
  const { baseDir, jsonDb } = app.config;
  const directory = path.join(baseDir, jsonDb.loadDir);
  app.loader.loadToApp(directory, jsonDb.nameSpace);
};
