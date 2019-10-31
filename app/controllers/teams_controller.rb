class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]

  def index
    @teams = Team.all
    json_response(@teams)
  end

  def create
    @team = Team.create!(team_params)
    json_response(@team, :created)
  end

  def show
    json_reponse(@team)
  end

  def update
    @team.update(team_params)
    head :no_content
  end

  def destroy
    @team.destroy
    head :no_content
  end

  private

  def team_params
    params.require(:team).permit(:name, :color, :rank)
  end

  def set_team
    @team = Team.find(params[:id])
  end

end
