// took a look at my previous fibonacci sequence program

function fib(n, i = 2, fibSeq = []) 
{
    if (n >= 0)
    {
        fibSeq[0] = 0;
    }

    if (n >= 1)
    {
        fibSeq[1] = 1;
    }

    if (n === 1 || n === 0)
    {
        return fibSeq;
    }

    fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    n--;
    i++;
    return fib(n, i, fibSeq);
}