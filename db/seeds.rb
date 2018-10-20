# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Frame.destroy_all
Following.destroy_all


ted = User.create!(email: 'ted@veridiantechnologies.com', username: 'Ted', password: 'hire_me!')
louis = User.create!(email: 'louis@daguerre', username: 'Louis', password: 'louislouis')
newt = User.create!(email: 'newt@erkins', username: 'Newt', password: 'newtnewt')
blaine =User.create!(email: 'blaine@bobson', username: 'Blaine', password: 'blaineblaine')
paul = User.create!(email: 'paul@atredies', username: 'Paul', password: 'oolshoolsh')
ansel = User.create!(email: 'ansel@anseladams', username: 'Ansel', password: 'anselansel')
greg = User.create!(email: 'greg@olgfardiv', username: 'Greg', password: 'greggreg')
barry = User.create!(email: 'rebecca@pacific', username: 'Rebecca', password: 'rebeccarebecca')
don = User.create!(email: 'don@henley', username: 'Don Henley', password: 'dondon')




frame_one = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_one.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN2928.jpg"),
  filename: 'DSCN2928.jpg')
frame_one.save


frame_two = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_two.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN2948.jpg"),
  filename: 'DSCN2948.jpg')
frame_two.save


frame_three = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_three.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN2955.jpg"),
  filename: 'DSCN2955.jpg')
frame_three.save


frame_four = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_four.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN2966.jpg"),
  filename: 'DSCN2966.jpg')
frame_four.save

frame_five = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_five.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN4233.jpg"),
  filename: 'DSCN4233.jpg')
frame_five.save

frame_six = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_six.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN4284.jpg"),
  filename: 'DSCN4284.jpg')
frame_six.save

frame_seven = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_seven.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN4354.jpg"),
  filename: 'DSCN4354.jpg')
frame_seven.save

frame_eight = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_eight.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN4372.jpg"),
  filename: 'DSCN4372.jpg')
frame_eight.save

frame_nine = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_nine.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN4431.jpg"),
  filename: 'DSCN4431.jpg')
frame_nine.save

frame_ten = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_ten.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN5129.jpg"),
  filename: 'DSCN5129.jpg')
frame_ten.save

frame_eleven = Frame.new(photographer_id: don.id, title: Faker::ElderScrolls.region,
  caption: (Faker::DrWho.quote + ' ' + Faker::DrWho.quote + ' ' + Faker::DrWho.quote) * 6
 )
frame_eleven.image.attach(io: File.open("/Users/charleskitchen/Desktop/candidate_photos/just_eagles/DSCN5316.jpg"),
  filename: 'DSCN5316.jpg')
frame_eleven.save
