json.frames do
  json.array!  @frames do |frame|
    json.extract! frame, :id, :title, :caption, :photographer_id, :image
    json.awsLocale url_for frame.image
  end
end
