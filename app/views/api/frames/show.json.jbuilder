metadata = @frame.image.metadata if @frame.image.metadata || null
json.frame do
  json.partial! 'frame', frame: @frame
  metadata = @frame.image.metadata
  if metadata
    json.extract! metadata, :make if metadata[:make]
    json.extract! metadata, :model if metadata[:model]
    json.extract! metadata, :exif if metadata[:exif]
  end
end
json.user do
  json.extract! @user, :id, :username, :email, :followees, :followers
end
