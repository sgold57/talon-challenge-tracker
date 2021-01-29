class CompletesController < ApplicationController
  def index
    @completes = Complete.all
    render json: @completes, include: [:skier, :trail]
  end

  def create
    id_for_reload = params[:skier_id]
    @complete = Complete.create(
      skier_id: params[:skier_id],
      trail_id: params[:trail_id]
    )
    redirect_to "http://localhost:3001/index.html" 
  end

end
