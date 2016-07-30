#! /usr/local/bin/node
var unquote = require('./j-unquote')
var transformer = require('console-in-transformer')

transformer(unquote, '\n')