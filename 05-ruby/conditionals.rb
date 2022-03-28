# Ruby has a rich framework for asking questions (conditionals)

n = 1001

if n > 5
    puts "Wow"
    puts "n is greater than 5"
else
    puts "n is less than (or equal) to 5"
end

# Multiple possibilities:

grade = 'F'

# In Ruby: == is enough to give you strict equality (don't use threequals ===)
if grade == 'A'
    puts "You are killing it"
elsif grade == 'B'
    puts "You are coasting fine"
elsif grade == 'C'
    puts "Adequate"
else # default
    puts "Please see me after class"
end

# TODO: research Ruby's case statement

# Ruby's bonus conditionals

# Short AKA modifier AKA  backwards if statement
# Only work if: no else part AND the body is a single line

puts "n is greater than 5" if n > 5

# unless: opposite of if
today_is_wednesday = false

# if today_is_wednesday != true
#     puts "Today is not Wednesday"
# end

unless today_is_wednesday
    puts "Today is not Wednesday"
end

# unless also supports the modifier form:
puts "Today is not Wednesday" unless today_is_wednesday
