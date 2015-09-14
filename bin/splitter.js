#!/usr/bin/jjs -J-Dnashorn.args=-scripting -cp ./../lib/guava.jar
var splitter = Java.type('com.google.common.base.Splitter');
var args = $ARG;
var String = Java.type('java.lang.String');
var delim = new String(args[0]);
var stringToSplit = new String(args[1]);
var result = splitter.on(delim).omitEmptyStrings().trimResults().split(stringToSplit);

result.forEach(function(s) {
    print(s);
});
