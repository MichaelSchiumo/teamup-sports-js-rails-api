class TeamsController < ApplicationController
  before_action :set_team, only: [:update, :destroy]

  def index
    teams = Team.all
    render json: TeamSerializer.new(teams).to_serialized_json
  end

  def create
    team = Team.create!(team_params)
    json_response(team, :created)
  end

  def show
    team = Team.find_by(id: params[:id])
    render json: TeamSerializer.new(team).to_serialized_json
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
