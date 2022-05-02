# Fibonacci
# 1 2 3 4 5 6  7
# 1 1 2 3 5 8 13 21 34 55 89

require 'pry'

def fibonacci_iterative(n) # initial
    result = 1
    a = 1
    b = 1
    while n > 2
        # parallel assignment: atomic
        a, b = b, a + b
        n -= 1
    end

    b
end

def fibonacci_recursive(n)
    if n <= 2
        1
    else
        fibonacci_recursive(n-1) + fibonacci_recursive(n-2) # ?!
    end
end

# Bonus homework:
# Make this faster and still recursive.

# Option a: memoisation
def fib_memo(n)
    @fib ||= {} # assigns an empty hash to @fib if it doesn't already have a value.
    if @fib[n]
        @fib[n]
    elsif n <= 2
        1
    else
        @fib[n] = fib_memo(n-1) + fib_memo(n-2)
    end
end

# Option b: iterative recursion: only recurse once per call.
def fib(n, a=1, b=1)
    if n == 1 || n == 2
        b
    else
        fib n-1, b, a+b # this might need some thought
   end
end

binding.pry