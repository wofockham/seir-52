
# 5! = 5 * 4 * 3 * 2 * 1
# 5! = 5 * 4!            # do some work AND move closer to being finished


# n! = n * (n-1)!                    
# Divide and conquer

require 'pry'

def factorial_iterative(n) # initial
    result = 1
    while n > 0           # conditional
        result *= n        # mutation
        n -= 1             # update: mutation
    end
    result
end

# no loop, no mutation
def factorial_recursive(n) # initial
    if n <= 1
        1
    else
        n * factorial_recursive(n-1)
    end
end

binding.pry