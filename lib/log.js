/**
 * Created by hdumok on 2016/8/6.
 */

import log4js from 'log4js'
import nodemailer from 'nodemailer'
import util from 'util'

log4js.configure({ // 输出类型
  appenders: [
    {
      category: 'console',
      type: 'console'
    },
    {
      category: 'server',
      type: 'dateFile',
      filename: './logs/log',
      alwaysIncludePattern: true,
      pattern: '-yyyy-MM-dd.log'
    }
  ],
  replaceConsole: true,
  levels: {
    'console': LOG_LEVEL,
    'server': LOG_LEVEL
  }
})

let logServer = log4js.getLogger('server')

let consoleLog = console.log
console.log = function (...args) {
  consoleLog.apply(console, args)
  logServer.info.apply(logServer, args)
}

let consoleDebug = console.debug
console.debug = function (...args) {
  consoleDebug.apply(console, args)
  logServer.debug.apply(logServer, args)
}

let consoleError = console.error
console.error = function (...args) {
  consoleError.apply(console, args)
  logServer.error.apply(logServer, args)

  // 先将就一下
  sentAlarmEmail(args)
}

var sentAlarmEmail = (function () {
  var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
      user: '*****',
      pass: '*****'
    }
  })

  var mailOptions = {
    from: 'hdumok@qq.com', // sender address
    to: ['hdumok@163.com'], // list of receivers
    subject: 'mok server error' // Subject line
  }

  return function (args) {
    mailOptions.text = util.format.apply(util, args)
    transporter.sendMail(mailOptions)
  }
})()

process.on('uncaughtException', function (err) {
  console.error('uncaughtException: \n' + err.stack)
})

let [log, debug, error] = [console.log, console.debug, console.error]

export { log, debug, error }
