let http = require('http');
let winston = require('winston');

let logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    transports: [new winston.transports.Console()]
});

http.createServer(onRequest).listen(3011);

function onRequest(request, response) {
    logger.log('info', 'A request was received');
    response.writeHead(200);
    response.end();
}