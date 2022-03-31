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
# A blank form in which to describe a new butterfly
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE
# Inserts the parameters from the NEW form into the database
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

# EDIT
# A prefilled form in which to modify an existing butterfly
get '/butterflies/:id/edit' do
    @butterfly = query_db "SELECT * FROM butterflies WHERE id=#{ params[:id] }"
    @butterfly = @butterfly.first # extract the butterfly from the array
    erb :butterflies_edit
end

# UPDATE
# Updates the database with the parameters entered in the EDIT form
post '/butterflies/:id' do
    query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    redirect to("/butterflies/#{ params[:id] }") # GET request
end

# DELETE
# Deletes the butterfly entirely from the database
get '/butterflies/:id/delete' do
    query_db "DELETE FROM butterflies WHERE id=#{ params[:id] }"
    redirect to('/butterflies') # choose your next victim
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end