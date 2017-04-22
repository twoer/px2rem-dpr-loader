var loaderUtils = require('loader-utils')
var px2rem = require('px2rem-dpr')

module.exports = function (source) {
  var query = loaderUtils.parseQuery(this.query)
  var px2remIns = new px2rem(query)
  return px2remIns.generateRem(source)
}
