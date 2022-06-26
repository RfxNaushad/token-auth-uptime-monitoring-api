/*  
  Title: Uptime Monitoring Application
  Description: A Restful API to monitor up or down time fof user defined links
  Author: Naushad Karim
  Date: 
*/

// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
// app object - module scaffolding
const app = {};

// configuration
app.config = {}

// testing file system
// todo pore muche dibo
// data.create('test','newFile',
// {'name':'Bangladesh','language':'Bangla'}, (err)=>{
//   console.log(`error was`, err);
// });
// data.read('test','newFile',(err, data)=>{
//   console.log(err,data);
// });
// data.update('test','newFile',{'name':"england", 'language': 'english'},(err, data)=>{
//   console.log(err);
// });
// data.delete('test','newFile',(err)=>{
//   console.log(err);
// });

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        // console.log(`Environment variable is ${process.env.NODE_ENV}`)
        console.log(`listening to port ${environment.port}`)
    })
}

// handle req and response
app.handleReqRes = handleReqRes;

// start server
app.createServer()