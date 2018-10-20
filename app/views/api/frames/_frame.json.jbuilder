json.extract! frame, :id, :title, :caption, :photographer_id, :created_at
json.awsLocale url_for frame.image
json.awsLocaleLight url_for frame.image.variant(resize: '100 x 100').processed.service_url

metadata = frame.image.metadata
json.extract! metadata, :width if metadata[:width]
json.extract! metadata, :height if metadata[:height]
