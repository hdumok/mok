/**
 * Created by hdumok on 2016/8/5.
 */
require('babel-register')({
	"presets": ["es2015", "stage-2"],
	"plugins": ["transform-runtime"],
	"comments": false
});

require('babel-polyfill');

global.NODE_ENV = process.env.NODE_ENV || "development";
global.ROOT = __dirname;
global.Promise = require('bluebird');
global.CONSTANTS = require('./const');
global.CONFIG = require('./config')[NODE_ENV];

//require('./app/server');
require('./app/wechat');