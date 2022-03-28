def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    # TODO: Add the other operations here (multiply, divide, subtract)
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Addition coming soon" # TODO: actually do the addition somehow
    # put additional when clauses for multiply, subtract, divide, etc
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator!"
