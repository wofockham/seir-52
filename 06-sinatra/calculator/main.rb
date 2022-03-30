require 'sinatra' 
require 'sinatra/reloader'

# ERB: Embedded Ruby => HTML with chunks of Ruby in it!

get '/' do
    erb :home # automatically searches in the views/ folder
end

get '/result' do
    x = params[:x].to_f
    y = params[:y].to_f

    @result = case params[:operator]
    when '+' then x + y
    when '-' then x - y
    when '*' then x * y
    when '/' then x / y
    end

    erb :result
end
