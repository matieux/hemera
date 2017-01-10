'use strict'


exports.plugin = function myPlugin(options) {

  var hemera = this

  hemera.expose('somethingToExpose', 4)

  hemera.add({
    topic: 'math',
    cmd: 'add'
  }, (resp, cb) => {

    cb(null, resp.a + resp.b)
  })

}

exports.options = {
  privateExtensions: true // privateExtensions means that plugin extension should only affect on the action which are defined in the plugin
}

exports.attributes = {
  name: 'myPlugin',
  dependencies: []
}


/**
 * Usage
 *

  const Hemera = require('./../')
  const nats = require('nats').connect()

  const hemera = new Hemera(nats, { logLevel: 'info' })

  hemera.ready(() => {

    const plugin = require('./plugin-as-file')
    plugin.options.a = 10

    hemera.use(plugin)

  })

 */