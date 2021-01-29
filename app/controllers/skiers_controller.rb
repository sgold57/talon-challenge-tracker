class SkiersController < ApplicationController
  def index
    @skiers = Skier.all 
    render json: @skiers
  end

  # def show
  #   @skier = Skier.find(
  #     name: params[:name],
  #     password: params[:password]
  #   )
  #   render json: @skier
  #   redirect_to `http://localhost:3001/showSkier.html?=#{@skier.id}`
  # end

  # def create
  #   @skier = Skier.create(
  #     name: params[:name],
  #     password: params[:password]
  #   )
  #   render json: @skier
  #   redirect_to `http://localhost:3001/showSkier.html?=#{@skier.id}`
  # end
  def show
    @skier = Skier.find(params[:id])
    render json: @skier
  end
end
