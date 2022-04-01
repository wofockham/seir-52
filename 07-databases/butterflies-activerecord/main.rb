require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'

# Config: next week, Rails will do this for you automatically
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX
# Show all the butterflies (in summary)
get '/butterflies' do
    @butterflies = Butterfly.all
    erb :butterflies_index
end

# NEW
# A blank form in which to describe a new butterfly
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE
# Inserts the parameters from the NEW form into the database
post '/butterflies' do
    butterfly = Butterfly.new
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.save
    redirect to('/butterflies') # GET
end

# SHOW
# Show a single butterfly (in detail)
get '/butterflies/:id' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_show
end

# EDIT
# A prefilled form in which to modify an existing butterfly
get '/butterflies/:id/edit' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_edit
end

# UPDATE
# Updates the database with the parameters entered in the EDIT form
post '/butterflies/:id' do
    butterfly = Butterfly.find params[:id]
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.save
    redirect to("/butterflies/#{ params[:id] }") # GET request
end

# DELETE
# Deletes the butterfly entirely from the database
get '/butterflies/:id/delete' do
    butterfly = Butterfly.find params[:id]
    butterfly.destroy
    redirect to('/butterflies') # choose your next victim
end
