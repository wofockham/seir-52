class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist
  end

  def edit
  end

  def show
    @artist = Artist.find params[:id]
  end

  private # everything after this is not visible outside this file
  def artist_params # strong params (see docs)
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image)
  end
end
