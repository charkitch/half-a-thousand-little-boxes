json.extract! frame, :id, :title, :caption, :photographer_id, :created_at
json.awsLocaleLight url_for frame.thumbnail
json.awsLocaleMedium url_for frame.fairly_large_image
json.awsLocaleFull url_for frame.true_image
metadata = frame.image.metadata
json.extract! metadata, :width if metadata[:width]
json.extract! metadata, :height if metadata[:height]
