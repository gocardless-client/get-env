'use strict';

/**
 * Provides env object based on NODE_ENV
 * Defaults to develpment mode
 *
 *   NODE_ENV=production
 *   {
 *     development: false,
 *     production: true
 *   }
 *
 *   NODE_ENV !== production|test
 *   {
 *     development: true,
 *     production: false
 *   }
 *
 * @return {Object}
 */

function getEnv() {
  var DEVELOPMENT = 'development';
  var PRODUCTION = 'production';
  var TEST = 'test';

  var allowed = [DEVELOPMENT, PRODUCTION, TEST];
  var env = process.env.NODE_ENV;
  var config = {
    development: true,
    production: false,
    test: false
  };

  if (allowed.indexOf(env) !== -1) {
    config.production = (env === PRODUCTION);
    config.development = (env === DEVELOPMENT);
    config.test = (env === TEST);
  }

  return config;
}

module.exports = getEnv;
