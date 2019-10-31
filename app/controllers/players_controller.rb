class PlayersController < ApplicationController
  before_action :set_player, only: [:show, :update, :destroy]

  def index
    players = Player.all
    render json: players, only: [:id, :name, :position, :number, :captain, :hometown]
  end

  def create
    player = Player.create!(player_params)
    json_response(player, :created)
  end

  def show
    render json: {id: player.id, name: player.name, position: player.position,
      number: player.number, captain: player.captain, hometown: player.hometown}
  end

  render json: {id: bird.id, name: bird.name, species: bird.species }

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
