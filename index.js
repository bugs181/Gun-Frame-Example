const Frame = require('Frame/build/Frame.js')

const Message = Frame('Message')
const Console = Frame('Console')

const Gun = Frame('Gun')
const gun = Gun()

// Subscribe to updates on /users path
Message
  .from(gun, 'map', '/users')
  .to(Console)

// Put something into the /users set
/*Message
  .from('Levi')
  .to(gun, 'set', '/users')
*/

/*const Set = function(data) {
  Message
    .from(data[0])
    .to(gun, 'set', '/users')
}

Gun.from(Set, 'Levi')
*/


//Gun.to('Levi', 'set', '/users')

/*
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

setInterval(function() {
  Message
  .from('Rando' + getRandomInt(1, 30))
  .to(gun, 'set', '/users')
}, 1000)
*/
