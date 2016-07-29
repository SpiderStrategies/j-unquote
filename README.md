# J-Unquote

Removes the quoting that is used for string literals in Java

# Programmatic Usage

Accepts a string as an argument, returns a transformed string.

> var jQuote = require('j-unquote')
> var unquoted = jUnquote(quoted)

## Command Line Invocation

This can be invoked on the command line as well.

> j-unquote /path/to/file

Reads /path/to/file and unquotes the text in it, writing to stdout.

> j-unquote -

Reads from stdin, unquotes the text, writing to stdout.

> j-unquote

Reads from stdin, unquotes the text, writing to stdout. Useful for allowing
keyboard input and getting the transformed input back.
