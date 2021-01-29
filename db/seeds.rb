# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Complete.destroy_all
Trail.destroy_all
Skier.destroy_all

sam = Skier.create(name: "Sam", password: "hello")
howard = Skier.create(name: "Howard", password: "duck")
ben = Skier.create(name: "Ben", password: "whatup")
meredith = Skier.create(name: "Meredith", password: "yoyo")
stephen = Skier.create(name: "Stephen", password: "mets")
jonah = Skier.create(name: "Jonah", password: "bucs")
noah = Skier.create(name: "Noah", password: "golf")
jill = Skier.create(name: "Jill", password: "mayo")


goshawk = Trail.create(trail_name: "Goshawk")
bald_eagle = Trail.create(trail_name: "Bald Eagle")
screech_owl = Trail.create(trail_name: "Screech Owl")
peregrine = Trail.create(trail_name: "Peregrine")
kestrel = Trail.create(trail_name: "Kestrel")
golden_eagle = Trail.create(trail_name: "Golden Eagle")
loco = Trail.create(trail_name: "Loco")
ruffed_grouse= Trail.create(trail_name: "Ruffed Grouse")
shooting_star= Trail.create(trail_name: "Shooting Star")
raven_ridge= Trail.create(trail_name: "Raven Ridge")
ptarmigan= Trail.create(trail_name: "Ptarmigan")
lupine= Trail.create(trail_name: "Lupine")
bald_eagle= Trail.create(trail_name: "Bald Eagle")
falcon_park= Trail.create(trail_name: "Falcon Park")

Complete.create(skier: sam, trail: goshawk)
Complete.create(skier:sam, trail: bald_eagle)
Complete.create(skier: ben, trail: bald_eagle)

