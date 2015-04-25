import CoreJs from 'core-js/es5';
var context = require.context('./scripts', true, /-test\.js$/);
context.keys().forEach(context);