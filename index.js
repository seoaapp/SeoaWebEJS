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
const PORT = 5820

/** express 모듈 */
const express = require('express')

/** superagent 모듈 */
const superagent = require('superagent')

/** discord 모듈 */
const discord = require('discord.js')

/** ejs 모듈 */
const ejs = require('ejs')

/** application */
const app = express()

start((bot) => {
  app.get('/', (req, res) => {
    ejs.renderFile('./views/index.ejs', { superagent: superagent, process: process, bot: bot }, (err, data) => {
      if (err) console.error(err)
      res.send(data)
    })
  })
  
  app.listen(PORT)
})

function start (cb) {
  let bot = new discord.Client()
  bot.login(process.env.discordToken)

  bot.on('ready', () => {
    cb(bot)
  })
}
