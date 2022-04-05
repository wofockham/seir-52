class PagesController < ApplicationController
    def numbers
        @amount = 3433.229
        @large_number = 1232323343
        @phone = 2125551212
    end

    def text
        @numbers = (1..20).to_a.shuffle
        @story = 'A very very very very very very very very very very long time in a galaxy far far far far far away'
        @friend_count = 1
        @enemy_count = 853
    end

    def assets
    end

    def url
    end
end