json.array! @frames do |frame|
  json.extract! frame, :id, :title, :caption, :photographer_id
  json.awsLocale url_for frame.image
end

json.extract! frame, :id, :title, :caption, :photographer_id
json.awsLocale url_for frame.image

json.extract! bench, :id, :description, :lat, :lng, :seating,
:picture_url, :average_rating


json.frames do
  json.array!  @frames do |frame|
    json.extract! frame, :id, :title, :caption, :photographer_id, :image
    json.awsLocale url_for frame.image
  end
end
