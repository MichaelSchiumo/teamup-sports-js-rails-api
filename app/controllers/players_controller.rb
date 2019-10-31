class PlayersController < ApplicationController

  def index
    @players = Player.all
    json_response(@players)
  end

  def create
    @player = Player.create!(player_params)
    json_response(@player, :created)
  end

  def show
    json_response(@player)
  end

  def update
    @player.update(player_params)
  end  
end



# before_action :set_team, only: [:show, :update, :destroy]
#
# def index
#   @teams = Team.all
#   json_response(@teams)
# end
#
# def create
#   @team = Team.create!(team_params)
#   json_response(@team, :created)
# end
#
# def show
#   json_reponse(@team)
# end
#
# def update
#   @team.update(team_params)
#   head :no_content
# end
#
# def destroy
#   @team.destroy
#   head :no_content
# end
#
# private
#
# def team_params
#   params.require(:team).permit(:name, :color, :rank)
# end
#
# def set_team
#   @team = Team.find(params[:id])
# end
