class AddTeamIdToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :team_id, :integer
  end
end
