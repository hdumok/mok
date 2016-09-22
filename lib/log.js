/**
 * Created by hdumok on 2016/8/6.
 */

import log4js from 'log4js';
import nodemailer from 'nodemailer';
import util from 'util';

log4js.configure({   //输出类型
    appenders: [
        {
            category: "console",
            type: 'console'
        },
        {
            category: "server",
            type: "dateFile",
            filename: "./logs/log",
            alwaysIncludePattern: true,
            pattern: "-yyyy-MM-dd.log"
        }
    ],
    replaceConsole: true,
    levels: {
        "console":LOG_LEVEL,
        "server":LOG_LEVEL
    }
});

let logserver = log4js.getLogger('server')

let _console_log = console.log;
console.log = function (...args) {
    _console_log.apply(console, args);
    logserver.info.apply(logserver, args);
};

let _console_debug = console.debug;
console.debug = function (...args) {
    _console_debug.apply(console, args);
    logserver.debug.apply(logserver, args);
};

let _console_error = console.error;
console.error = function (...args) {
    _console_error.apply(console, args);
    logserver.error.apply(logserver, args);

    //先将就一下
    sentAlarmEmail(args)
};

var sentAlarmEmail = (function(){
    var transporter = nodemailer.createTransport({
        service: 'QQ',
        auth: {
            user: '*****',
            pass: '*****'
        }
    });

    var mailOptions = {
        from: 'hdumok@qq.com', // sender address
        to: ['hdumok@163.com'], // list of receivers
        subject: 'mok server error' // Subject line
    };

    return function (args){
        mailOptions.text = util.format.apply(util, args);
        transporter.sendMail(mailOptions);
    }
})()

process.on('uncaughtException', function(err) {
    console.error("uncaughtException: \n" + err.stack);
});

let [log, debug, error] = [console.log, console.debug, console.error];

export {log, debug, error}