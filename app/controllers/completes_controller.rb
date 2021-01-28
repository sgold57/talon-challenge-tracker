class CompletesController < ApplicationController
  def index
    @completes = Complete.all
    render json: @completes, include: [:skier, :trail]
  end

end
