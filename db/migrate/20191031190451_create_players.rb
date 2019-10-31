class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.integer :number
      t.boolean :captain
      t.string :hometown

      t.timestamps
    end
  end
end
