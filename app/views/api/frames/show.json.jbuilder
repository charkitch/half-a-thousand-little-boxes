
debugger
metadata = @frame.image.metadata
json.frame do
  json.partial! 'frame', frame: @frame
  json.extract! metadata, :make, :model
  json.extract! metadata, :exif
  debugger
end
json.user do
  json.extract! @user, :id, :username, :email, :followees, :followers
end
