#!/usr/bin/jjs -scripting
var args = $ARG;
addUrlToClasspath(args[2]+"/../lib/guava.jar");
var Splitter = Java.type('com.google.common.base.Splitter');
var String = Java.type('java.lang.String');
var delim = new String(args[0]);
var stringToSplit = new String(args[1]);
var result = Splitter.on(delim).omitEmptyStrings().trimResults().split(stringToSplit);

result.forEach(function (s) {
    print(s);
});

function addUrlToClasspath(pathName) {
    var sysloader = java.lang.ClassLoader.getSystemClassLoader();
    var sysclass = java.net.URLClassLoader.class;
    var ClassArray = Java.type("java.lang.Class[]");
    var parameters = new ClassArray(1);
    parameters[0] = java.net.URL.class;
    var method = sysclass.getDeclaredMethod("addURL", parameters);
    method.setAccessible(true);
    var ObjectArray = Java.type("java.lang.Object[]");
    var array = new ObjectArray(1);
    var Path = Java.type("java.nio.file.Path");
    var Paths = Java.type("java.nio.file.Paths");
   # var userDir = java.lang.System.getProperty('user.dir'); 
   # var curDir = Paths.get("").toAbsolutePath().toString();
   # print(curDir);
    var p1 = Paths.get(pathName);
    var f = p1.toFile();
    if (f.isFile()) {
        var u = f.toURL();
        array[0] = u;
        method.invoke(sysloader, array);
    } else {
        var listOfFiles = f.listFiles();
        if (listOfFiles != null)
            for (var i = 0; i < listOfFiles.length; i++) {
                if (listOfFiles[i].isFile()) {
                    var u = listOfFiles[i].toURL();
                    array[0] = u;
                    method.invoke(sysloader, array);
                }
            }
    }
}
