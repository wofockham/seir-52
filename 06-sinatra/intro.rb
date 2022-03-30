require 'sinatra'
require 'sinatra/reloader' # c/o sinatra-contrib

get '/' do
    "Hey there, this is the homepage"
end

get '/hello' do
    "Hello world from Sinatra!!! OMG THE RELOADER IS NOT THAT AMAZING"
end

get '/goodbye' do
    "Goodbye cruel world. I'm sorry it had to be this way!"
end

# Dynamic content
get '/lucky_number' do
    "Here is your random number #{ rand 1..40 }"
end

get '/uptime' do
    "The server uptime is #{ `uptime` }"
end

# Dynamic URLs

# Marx Brothers Fan Club: $500

# Infinite number of URLs
get '/fanclub/:name' do
    "#{ params[:name].capitalize } is a proud member of the Marx Brothers fan club"
end

# $700
get '/fanclub/:first/:last' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud silver member of the Marx Brothers fan club"
end

# $1000
get '/fanclub/:first/:last/:favourite' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a proud platinum member of the Marx Brothers fan club and their favourite brother is #{ params[:favourite].capitalize }"
end

# Second crappiest calculator of the course
get '/multiply/:x/:y' do
    result = params[:x].to_f * params[:y].to_f
    "The result is <strong>#{ result }</strong>"
end

# TWO SERIOUS COMPLAINTS
# If this is a "web" server, where is the goddamn HTML?
# How do we get user input without making the poor slobs edit the URL by hand?