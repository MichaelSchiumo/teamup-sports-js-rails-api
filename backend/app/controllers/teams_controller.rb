class TeamsController < ApplicationController
  before_action :set_team, only: [:update, :destroy]

  def index
    teams = Team.all
    options = {
      include: [:players]
    }
    render json: TeamSerializer.new(teams, options)
  end

  def create

    team = Team.new(team_params)
    options = {
      include: [:players]
    }
    render json: TeamSerializer.new(team)

    # json_response(team, :created)

  end

  def show
    team = Team.find_by(id: params[:id])
    options = {
      include: [:players]
    }
    render json: TeamSerializer.new(team, options)
  end

  def update
    team.update(team_params)
    head :no_content
  end

  def destroy
    team.destroy
    head :no_content
  end

  private

  def team_params
    params.require(:team).permit(:name, :color, :rank)
  end

  def set_team
    team = Team.find(params[:id])
  end

end
