#!/bin/bash
RESULT=`node j-unquote-command test/input1-quoted.txt | diff test/input1.txt -`
if [ -z "$RESULT" ] 
then
	return 0
else
	return 1
fi