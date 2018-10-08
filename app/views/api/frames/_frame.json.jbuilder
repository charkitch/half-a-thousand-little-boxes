json.extract! frame, :id, :title, :caption, :photographer_id, :created_at
json.awsLocale url_for frame.image

metadata = frame.image.metadata
json.extract! metadata, :width if metadata[:width]
json.extract! metadata, :height if metadata[:height]
