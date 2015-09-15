#jjs-guava-splitter
A guava based splitter for cli leveraging Nashorn jjs utility. Not very useful in its current form, but a reference for writing Nashorn scripts that tap into java library functions.

###Usage

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

