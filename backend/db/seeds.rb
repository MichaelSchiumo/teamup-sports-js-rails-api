# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#TEAM
#Name
#Rank
#Color

#PLAYER
#team_id
#name
#hometown
#number
#position

Team.create(:name => "Chelsea", :rank => 1, :color => "Blue and White")
Team.create(:name => "Manchester United", :rank => 2, :color => "Red and Black")
Team.create(:name => "FC Barcelona", :rank => 3, :color => "Blue and Red")
Team.create(:name => "Athletico Madrid", :rank => 4, :color => "Red and White")
Team.create(:name => "Metrostars", :rank => 16, :color => "Red")
Team.create(:name => "LA Galaxy", :rank => 6, :color => "White")
Team.create(:name => "AC Milan", :rank => 8, :color => "Blue and Black")
Team.create(:name => "Bayern Munich", :rank => 5, :color => "Red")

Player.create(:team_id => "1", :name => "Christensen", :hometown => "Lillerod, Denmark", :position => "Defender", :number => 4)
Player.create(:team_id => "1", :name => "Caballero", :hometown => "Santa Elena, Argentina", :position => "Goalkeeper", :number => 13)
Player.create(:team_id => "1", :name => "Rudiger", :hometown => "Berlin, Germany", :position => "Defender", :number => 2)
Player.create(:team_id => "1", :name => "Alonso", :hometown => "Madrid, Spain", :position => "Defender", :number => 3)
Player.create(:team_id => "1", :name => "Kante", :hometown => "Paris, France", :position => "Midfield", :number => 7)
Player.create(:team_id => "1", :name => "Pulisic", :hometown => "Hershey, PA", :position => "Defender", :number => 22)

Player.create(:team_id => "2", :name => "De Gea", :hometown => "Madrid, Spain", :position => "Goalkeeper", :number => 1)
Player.create(:team_id => "2", :name => "Grant", :hometown => "London, England", :position => "Goalkeeper", :number => 13)
Player.create(:team_id => "2", :name => "Pogba", :hometown => "Paris, France", :position => "Midfield", :number => 6)
Player.create(:team_id => "2", :name => "Rashford", :hometown => "London, England", :position => "Forward", :number => 10)
Player.create(:team_id => "2", :name => "Greenwood", :hometown => "Liverpool, England", :position => "Forward", :number => 26)
Player.create(:team_id => "2", :name => "Chong", :hometown => "Amsterdam, Netherlands", :position => "Forward", :number => 44)

Player.create(:team_id => "3", :name => "Messi", :hometown => "Rosario, Argentina", :position => "Forward", :number => 10)
Player.create(:team_id => "3", :name => "Arthur", :hometown => "Goiania, Brazil", :position => "Midfield", :number => 8)
Player.create(:team_id => "3", :name => "Alba", :hometown => "Hospitalet de Llobregat, Spain", :position => "Defender", :number => 18)
Player.create(:team_id => "3", :name => "Firpo", :hometown => "Santo Domingo, Dominican Republic", :position => "Defender", :number => 24)
Player.create(:team_id => "3", :name => "Rakitic", :hometown => "Rheinfelden, Switzerland", :position => "Midfielder", :number => 4)
