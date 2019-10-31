class TeamsController < ApplicationController
  before_action :set_team, only: [:update, :destroy]

  def index
    teams = Team.all
    render json: teams, only: [:id, :name, :color, :rank]
  end

  def create
    team = Team.create!(team_params)
    json_response(team, :created)
  end

  def show
    team = Team.find_by(id: params[:id])
    render json: {id: team.id, name: team.name, color: team.color, rank: team.rank}
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
