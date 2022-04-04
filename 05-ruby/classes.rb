require 'pry'

# An object is kind of like a hash -- it has key/value pairs.
# BUT you have to predefine the keys.
# A strict hash: you have to predefine the shape.
# Also, unlike a Ruby hash, an object can have custom methods (functions inside the object).

class Actor
    def award_speech
        "I would like to thank my agents and my partner. We did it baby!"
    end

    def deny_allegations
        "I deny that and I don't remember and I was drunk and he's not my type" # Kevin Spacey defense
    end
end

# name, instrument, vice
class MarxBrother < Actor
    attr_accessor :name, :instrument, :vice # macro to write the getter and setter for you

    def initialize(n='', i='harmonica', v='lampooning authority') # variadic with default parameters
        @name = n
        @instrument = i
        @vice = v
    end

    # custom getter
    def play
        "My name is #{ @name } and I play the #{ @instrument }"
    end
end

class Stooge < Actor
    def terrible?
        true
    end
end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'
# groucho.name = 'Groucho'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo'
harpo.instrument = 'harp'
harpo.vice = 'mutism'

binding.pry
