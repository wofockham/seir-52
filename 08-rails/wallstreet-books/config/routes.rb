Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/funny' => 'pages#funny'

  get '/books' => 'books#form'
  get '/books/results' => 'books#results'

  get '/stocks' => 'stocks#form'
  get '/stocks/results' => 'stocks#results'
end
