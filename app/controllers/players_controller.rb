class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :update, :destroy]

  def index
    players = Player.all
    json_response( players)
  end

  def create
    player = Player.create!(player_params)
    json_response(player, :created)
  end

  def show
    json_response(player)
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
    params.require(:player).permit(:name, :position, :number, :captain, :hometown)
  end

  def set_player
    player = Player.find(params[:id])
  end
end
