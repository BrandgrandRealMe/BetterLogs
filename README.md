# BetterLogs
 NOT PUBLISHED
 
![image](https://user-images.githubusercontent.com/47084010/162233247-933af98b-c295-4bdb-b0a1-01e037972856.png)

A node package to give better logs!

## How to use
```js 
 var log = require('BetterLogs');

 log.silly("silly")
 
 log.verbose("verbose")
 
 log.info("info")
 
 log.data("data")
 
 log.help("help")
 
 log.warn("warn")
 
 log.debug("debug")
 
 log.server("server")
 
 log.error("error")
 ```
 
 ## Normal version
 ```js 
 var log = require('BetterLogs');
 ```
 
 ## Discord Version
 ```js 
 var log = require('BetterLogs2Discord');
 ```
 Add this to your .ENV file
 ```json
"LOGURL": "WEBHOOKURL" 
```
