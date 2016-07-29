var _ = require('lodash')

var unquote = function(input) {
	var lines = input.split('\n')
	lines = _.map(lines, (line) => {
		return line.replace(/^\s*"/g, '').replace(/"\s*[;+]?\s*$/g, '').replace(/\\"/g, '"').replace(/\\r\\n/, '\n').replace(/\\n/, '\n').replace(/\\\\/g, '\\')
	})
	
	return lines.join('')
}

module.exports = unquote