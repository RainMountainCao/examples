const redis = require('redis');

module.export = redis.createClient(6379, 'localhost');