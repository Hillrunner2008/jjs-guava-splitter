#jjs-guava-splitter
A guava based splitter for cli leveraging Nashorn jjs utility. Not very useful in its current form, but a reference for writing Nashorn scripts that tap into java library functions.

###Usage
<pre>
./splitter -- " " "a b c d e f g"
</pre>
####Output
<pre>
--start--
a
b
c
d
e
f
g
--end--
</pre>

