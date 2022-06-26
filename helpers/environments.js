/*
 * Title: Environments
 * Description: Handle all environments related things
 * Author: Naushad Karim
 *
 */

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'asjkfdpsjdfmldlsd',

};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'klashjdflkjsldfj',
};

// determine which environment was passed
const currentEnvironments = 
    typeof process.env.NODE_ENV === 'string'
    ? process.env.NODE_ENV
    : 'staging';

// export corresponding environment object
const environmentToExport = 
     typeof environments[currentEnvironments] === 'object'
     ?environments[currentEnvironments]
     : environments.staging;

// export
module.exports = environmentToExport;
