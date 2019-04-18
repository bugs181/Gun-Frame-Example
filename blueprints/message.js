'use strict'

// The Message blueprint will silently pass messages from one blueprint to another, unless a message format parameter is passed in during initialization.
// The message format parameter will transform messages of one type to another for blueprint intercompatibility.

//const fs = require('fs')

Blueprint = {
  name: 'Message',
  messageFormat: {},

  describe: {
    init: {
      'Optional Message Format': 'The message format will transform messages of one type to another for blueprint intercompatibility.',
    },

    in: {
      'format': 'Optional format to over-ride one passed in from init',
    },
  },

  singleton: false, // when true: IDE: This blueprint shares resources with itself. This means only one instance is created and re-used.

  init: function(props, done) {
    console.log('Called init for Message')
    this.Frame.state.messageFormat = props['Optional Message Format']
    done()
  },

  in: function(data, props) {
    console.log(this.name + '.in:', data) //, ':', props)
    this.out(data)
  },

  on: function(props) {
    console.log(this.name + '.on:', props)
    this.out(props)
  },
}
