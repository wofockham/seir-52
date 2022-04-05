Rails.application.routes.draw do
  root :to => 'page#home'

  get '/ogalonumbers' => 'pages#numbers', :as => :numbers # 'controller#action'
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'
end
