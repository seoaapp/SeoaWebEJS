/**
 * @name SeoaEJS
 * @description Seoa를 위한 새로운 웹페이지 입니다
 * @copyright (c) 2019. Seoa Page Develoment Team. all rights reserved
 * @license MIT
 * @author Seoa Page Develoment Team
 * @version 1.0.0
 */

'use strict' // 엄격모드 진입

/** WebServer Port */
const PORT = 5000

/** express 모듈 */
const express = require('express')

/** superagent 모듈 */
const superagent = require('superagent')

/** discord 모듈 */
const discord = require('discord.js')

/** 분필(진짜 분필) */
const chalk = require('chalk')

/** ejs 모듈 */
const ejs = require('ejs')

/** application */
const app = express()

start((bot) => {
  app.get('/', (req, res) => {
    console.log(chalk.yellow.bold('Request / by ' + req.ip))
    ejs.renderFile('./views/index.ejs', { superagent: superagent, process: process, bot: bot }, (err, data) => {
      if (err) console.error(err)
      res.send(data)
    })
  })

  app.get('/src/img/logo.png', (req, res) => {
    res.download(__dirname + '/views/src/img/logo.png')
  })

  app.get('/src/index.js', (req, res) => {
    res.download(__dirname + '/views/src/index.js')
  })

  app.get('/src/index.css', (req, res) => {
    res.download(__dirname + '/views/src/index.css')
  })

  app.listen(PORT, () => {
    console.log(chalk.bold.green('Service Available on http://localhost:' + PORT + '/'))
  })
})

function start (cb) {
  let bot = new discord.Client()
  bot.login(process.env.discordToken)

  bot.on('ready', () => {
    console.log(chalk.blue.bold('Discord Client(' + bot.user.username + ', ' + bot.user.id + ') Connected'))
    cb(bot)
  })
}
