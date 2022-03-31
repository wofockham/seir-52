require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# Show all the butterflies (in summary)
get '/butterflies' do
    @butterflies = query_db 'SELECT * FROM butterflies'
    erb :butterflies_index
end

# NEW
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE
post '/butterflies' do
    query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    redirect to('/butterflies') # GET
end

# SHOW
# Show a single butterfly (in detail)
get '/butterflies/:id' do
    @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = @butterfly.first # extract the butterfly from the array
    erb :butterflies_show
end




def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end