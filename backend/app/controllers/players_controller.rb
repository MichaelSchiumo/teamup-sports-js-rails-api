class PlayersController < ApplicationController
  before_action :set_player, only: [:update, :destroy]

  def index
    players = Player.all
    render json: PlayerSerializer.new(players).to_serialized_json
  end

  def create
    player = team.player.build(player_params)

    if meal.save
      json_response(player, :created)
    else
      render json: { message: 'Player was not created.' }
    end
  end

  def show
    player = Player.find_by(id: params[:id])
    render json: PlayerSerializer.new(player).to_serialized_json
  end

  def update
    player.update(player_params)
  end

  def destroy
    player.destroy
    head :no_content
  end

  private

  def player_params
    params.require(:player).permit(:name, :position, :number, :captain, :hometown, :team_id)
  end

  def set_player
    player = Player.find(params[:id])
  end
end
