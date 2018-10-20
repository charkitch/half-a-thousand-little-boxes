json.extract! frame, :id, :title, :caption, :photographer_id, :created_at
json.awsLocale url_for frame.image.variant(resize: '500 x 500').processed
json.awsLocaleLight url_for frame.image.variant(resize: '100 x 100').processed

metadata = frame.image.metadata
json.extract! metadata, :width if metadata[:width]
json.extract! metadata, :height if metadata[:height]
