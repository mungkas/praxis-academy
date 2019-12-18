document.write("masukan matriks");

document.write("<PRE>");

document.write("</PRE>");

document.write(" A = ");

var a = new Array (2);

a[0]=new Array(2);

a[1]=new Array(2);

a[0][0]=1;a[0][1]=2;a[1][0]=3;a[1][1]=4;

document.write("<PRE>");

document.write("</PRE>");

document.write(a[0][0]);

document.write(a[0][1]);

document.write("<PRE>");

document.write("</PRE>");

document.write(a[1][0]);

document.write(a[1][1]);

document.write("<PRE>");

document.write("</PRE>");

var b = new Array (2);

b[0]=new Array(2);

b[1]=new Array(2);

b[0][0]=5;b[0][1]=6;b[1][0]=7;b[1][1]=8;

document.write(" B = ");

document.write("<PRE>");

document.write("</PRE>");

document.write(b[0][0]);

document.write(b[0][1]);

document.write("<PRE>");

document.write("</PRE>");

document.write(b[1][0]);

document.write(b[1][1]);

document.write("<PRE>");

document.write("</PRE>");

document.write(" C = ");

document.write("<PRE>");

document.write("</PRE>");

var c = new Array (2);

c[0]=new Array(2);

c[1]=new Array(2);

for (var i=0; i<2; i++)

    for (var j=0; j<2; j++)

    c[i][j]=a[i][j]+b[i][j];

document.write(c[0][0]);

document.write(c[0][1]);

document.write("<PRE>");

document.write("</PRE>");

document.write(c[1][0]);

document.write(c[1][1]);