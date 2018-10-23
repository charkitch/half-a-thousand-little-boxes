json.extract! frame, :id, :title, :caption, :photographer_id, :created_at
# json.awsLocale frame.image.variant(resize: '500 x 500').processed.service_url
# json.awsLocale rails_representation_path frame.image.variant(resize: '500 x 500').processed
# json.awsLocaleLight frame.image.variant(resize: '100 x 100').service_url
json.awsLocaleLight frame.image.variant(resize: '100 x 100').service_url
# json.awsLocaleMedium frame.image.variant(resize: '500 x 500').service_url
json.awsLocaleMedium frame.image.variant(resize: '500 x 500').service_url
metadata = frame.image.metadata
json.extract! metadata, :width if metadata[:width]
json.extract! metadata, :height if metadata[:height]
