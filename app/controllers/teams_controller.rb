class TeamsController < ApplicationController

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

end



#   # POST /todos
#   def create
#     @todo = Todo.create!(todo_params)
#     json_response(@todo, :created)
#   end
#
#   # PUT /todos/:id
#   def update
#     @todo.update(todo_params)
#     head :no_content
#   end
#
#   # DELETE /todos/:id
#   def destroy
#     @todo.destroy
#     head :no_content
#   end
#
#   private
#
#   def todo_params
#     # whitelist params
#     params.permit(:title, :created_by)
#   end
#
#   def set_todo
#     @todo = Todo.find(params[:id])
#   end
# end
