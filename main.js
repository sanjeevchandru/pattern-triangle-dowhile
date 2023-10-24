document.write(" print a pattern of triangle do-while loop "+"<br>");
document.write("-------------------------"+"<br>");
let n=parseInt(prompt("Enter a number:"));

let i=1;
do{
    let k=n;
    do{
        document.write("&nbsp"+"&nbsp");
        k--;
    }
    while(k>=i)
    let j=1;
    do{
        document.write("*");
        j++;
    }
    while(j<=i)

    let l=1;
    do{
        document.write("*");
        l++;
    }
    while(l<=i)
    document.write("<br>");
    i++;
}
while(i<=n)


