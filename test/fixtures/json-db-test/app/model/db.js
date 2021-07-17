'use strict';

const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
// const path = require('path')

module.exports = app => {
  const { jsonDb } = app.config;
  const base = jsonDb.savePath + jsonDb.defaultFileName;
  const db = new JsonDB(new Config(base, jsonDb.saveOnPush, jsonDb.humanReadable, jsonDb.separator));
  return db;
};
