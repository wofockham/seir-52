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
# Option b: iterative recursion: only recurse once per call.

binding.pry