// took a look at my previous fibonacci sequence program

var fibSeq = [];

function fib(n, i = 2) 
{
    if (n === 0)
    {
        fibSeq.pop();
        return fibSeq;
    }
    if (n >= 1)
    {
        fibSeq[0] = 0;
    }

    if (n >= 2)
    {
        fibSeq[1] = 1;
    }

    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    n--;
    i++;
    return fib(n, i);
}