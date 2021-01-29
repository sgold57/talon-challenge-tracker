class SkiersController < ApplicationController
  def index
    @skiers = Skier.all 
    render json: @skiers
  end

  def create
    @skier = Skier.create(
      name: params[:name],
      password: params[:password]
    )
  
    redirect_to "http://localhost:3001/"
  end
  
  def show
    @skier = Skier.find(params[:id])
    render json: @skier
  end

  def destroy
    Skier.destroy(params[:id])
    redirect_to "http://localhost:3001/"
  end
end
