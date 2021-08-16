
 

 

let N = 20;
let n = 1
 
// Prints n, increments n and calls fun1()
function fun1()
{
    if (n <= N)
    {
        document.write( n+" ");
        n++;
        fun2();
    }
    else
    {
        return;
    }
}
 
// Prints n, increments n and calls fun2()
function fun2()
{
    if (n <= N)
    {
        document.write(n+" ");
        n++;
        fun1();
    }
    else
    {
        return;
    }
}
 
// Driver code
fun1();
 
// This code is contributed by rag2127
 
