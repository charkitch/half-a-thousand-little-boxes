@frames.each do |frame|
  json.set! frame.id do
    json.partial! 'frame', frame: frame
  end
end
