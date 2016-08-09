/**
 * Created by hdumok on 2016/8/6.
 */

import log4js from 'log4js';

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
        "console":"ALL",
        "server":"ALL"
    }
});

let logserver = log4js.getLogger('server')

let _console_log = console.log;
console.log = function (...args) {
    _console_log.apply(console, args);
    logserver.info.apply(logserver, args);
};

let _console_debug = console.log;
console.debug = function (...args) {
    _console_debug.apply(console, args);
    logserver.debug.apply(logserver, args);
};

let _console_error = console.error;
console.error = function (...args) {
    _console_error.apply(console, args);
    logserver.error.apply(logserver, args);
};

let [log, debug, error] = [console.log, console.debug, console.error];

export {log, debug, error}