class PlayerSerializer < ActiveModel::Serializer
  attributes :team_id, :name, :position, :number, :captain, :hometown

  belongs_to :team
end  
