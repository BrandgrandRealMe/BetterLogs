// Betterlogs Normal Version

// Load Dependencies
var colors = require('colors/safe');

// setup Colors
colors.setTheme({
  silly: 'rainbow',
  verbose: 'cyan',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'brightYellow',
  debug: 'blue',
  server: 'brightBlue',
  error: 'red'})

// send Loaded notif
console.log(colors.info(`BetterLogs | `) + `Successfuly Loaded!`)


// Setting the diffrent log types
function silly(msg){

 console.log(colors.silly(`silly | `) + msg); //send to console
  
}
function verbose(msg){

 console.log(colors.verbose(`verbose | `) + msg);
  
}
function info(msg){

 console.log(colors.info(`info | `) + msg);
  
}
function data(msg){

 console.log(colors.data(`data | `) + msg);

}
function help(msg){

 console.log(colors.help(`help | `) + msg);
  
}
function warn(msg){

 console.log(colors.warn(`warning | `) + msg);
  
}
function debug(msg){

 console.log(colors.debug(`debug | `) + msg);
  
}
function error(msg){

 console.log(colors.error(`error | `) + msg);
  
}
function server(msg){

 console.log(colors.server(`server | `) + msg);
  
}

// export log types
module.exports.silly = silly;
module.exports.verbose = verbose;
module.exports.info = info;
module.exports.data = data;
module.exports.help = help;
module.exports.warn = warn;
module.exports.debug = debug;
module.exports.error = error;
module.exports.server = server;
