/*
Title: Routes
Description: Application Routes
Author: Naushad Karim
*
*
*
*
*
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers');
const {userHandler} = require('./handlers/routeHandlers/userHandler');
const {tokenHandler} = require('./handlers/routeHandlers/tokenHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
    token: tokenHandler,
};

module.exports = routes;