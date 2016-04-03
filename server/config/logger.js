var logger = require('winston');
    require('winston-loggly');
 
logger.add(logger.transports.Loggly, {
    token: "87c1dd30-d309-437e-bcce-0492a94bf316",
    subdomain: "r1chjames",
    tags: ["NodeJS-HomeDashboard"],
    json:true
});