# while true
#     puts "wow"
# end

# Control-c to cancel a running Ruby program

# while
# initialize, conditional, update

# i = 0                       # initial
# while i < 10                # conditional
#     puts "i is now #{ i }"
#     i += 1                  # update
# end

# if     => unless
# while  => until

i = 0
until i == 10
    puts "i is now #{ i }"
    i += 1
end

# Iterators: Ruby's preferred method of iterating/looping
# No mess, no fuss

# 7.times { puts "Hello world" }

7.times do |i|
  puts "i is currently #{ i }"
end

# There are dozens of iterators. For example, to count backwards:
7.downto(0) do |n|
    puts "n is currently #{ n }"
end