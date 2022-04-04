class PagesController < ApplicationController
    def hello
        render :hello # equivalent to `erb :hello`
    end

    def goodbye
        render :goodbye
    end
end
