json.extract! frame, :id, :title, :caption, :photographer_id, :created_at
# json.awsLocale frame.image.variant(resize: '500 x 500').processed.service_url
# json.awsLocale rails_representation_path frame.image.variant(resize: '500 x 500').processed
json.awsLocaleLight frame.image.variant(resize: '100 x 100').processed.service_url
json.awsLocaleFull url_for frame.image
json.awsLocaleMedium frame.image.variant(resize: '500 x 500').processed.service_url
metadata = frame.image.metadata
json.extract! metadata, :width if metadata[:width]
json.extract! metadata, :height if metadata[:height]
