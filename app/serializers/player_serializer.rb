class PlayerSerializer < ActiveModel::Serializer
  attributes :team_id, :name, :position, :number, :captain, :hometown

  def player(player_object)
    @player = player_object
  end

  belongs_to :team
end
