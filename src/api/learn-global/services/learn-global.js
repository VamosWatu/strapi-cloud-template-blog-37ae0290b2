'use strict';

/**
 * learn-global service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learn-global.learn-global');
