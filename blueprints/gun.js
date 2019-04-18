'use strict'

let Gun
/*if (typeof window === 'undefined')
  Gun = require('Gun')
else
  Gun = require('Gun/gun.min.js')
*/

Gun = require('Gun/gun.min.js')

Blueprint = {
  name: 'Gun',

  describe: {
    init: {
      'opts': 'The same opts you pass into Gun(opts)',
    },

    in: {
      'op': 'Operation to use on Gun',
      'path': 'Optional soul of node',
    },

    on: {
      'op': 'Operation to use on Gun',
      'path': 'Optional soul of node',
    },
  },

  init: function(props, done) {
    console.log(this.name, 'init props:', props)
    const gun = Gun(props.opts)

    this.Frame.state.opts = props.opts
    this.Frame.state.gun = gun

    done()
  },

  in: function(data, props) {
    console.log(this.name + '.in:', data, ':', props)

    const gun = this.state.gun
    gun.get('app').get(props.path)[props.op](data)
  },

  on: function(props) {
    console.log(this.name + '.on:', props)

    const gun = this.state.gun
    gun.get('app').get(props.path)[props.op]().on(this.out)
  },
}
