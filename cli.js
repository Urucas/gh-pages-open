#!/usr/bin/env node
var opn = require('opn')
var logger = require('semafor')()
var ghPagesURL = require('./dist/index.js').default
ghPagesURL(process.cwd(), function(err, url){
  if(err) { 
    logger.fail(err) 
    return
  }
  opn(url)
  process.exit(0)
})
