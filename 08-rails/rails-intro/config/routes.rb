Rails.application.routes.draw do
  root :to => 'pages#hello'

  get '/hello' => 'pages#hello' # 'controller#action'
  get '/goodbye' => 'pages#goodbye'

  get '/auto/:color' => 'auto#color' # GET /auto/purple
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calculator#calculate'
end
