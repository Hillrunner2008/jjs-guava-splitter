#jjs-guava-splitter
A guava based splitter for cli leveraging the Nashorn jjs binary. Not very useful in its current form, but a reference for writing Nashorn scripts that tap into java library functions. 
The guava Splitter utility is called with the "omitEmptyStrings()" and "trimResults()" options. It could be expanded to allow for more options to be passed through params.

###Usage
To use this utility add the bin directory to your path.

####Args

 * arg[0] - delim (i.e. " ", "\t", or "\n")
 * arg[1] - string to split with splitter

####Input

```
splitter ' ' 'a b c d e f g'
```

####Output
```
a
b
c
d
e
f
g
```

