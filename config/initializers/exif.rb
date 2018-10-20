require 'exifr/jpeg'

module ActiveStorage
  class Analyzer::ImageAnalyzer < Analyzer

    def metadata
      read_image do |image|
        if rotated_image?(image)
          camera_orientation = { width: image.height, height: image.width }
        else
          camera_orientation = { width: image.width, height: image.height }
        end
        data = data_from_exif(image)
        regularPlusMeta = camera_orientation.merge(data || {})
        return regularPlusMeta
      end

    rescue LoadError
      logger.info "Skipping image analysis because the mini_magick gem isn't installed"
      {}
    end

    private

    def data_from_exif(image)
      return unless image.type == 'JPEG'

      if exif = EXIFR::JPEG.new(image.path).exif
        exif.fields[:exif].to_hash.select {|k, v| k != :user_comment }
        if gps = exif.fields[:gps]
          extra_data = {
            latitude:  gps.fields[:gps_latitude].to_f,
            longitude: gps.fields[:gps_longitude].to_f,
            altitude:  gps.fields[:gps_altitude].to_f
          }
        end
        top_targets = [ :make, :model, :date_time]
        top_targets.each do |top_key|
          extra_data[top_key] = exif.fields[top_key]
        end
        extra_data[:exif] = exif.fields[:exif].to_hash.select {|k, v| k != :user_comment }
        # extra_data[:exif] = exif.fields[:exif] if exif.fields[:exif]
        return extra_data
      end
    rescue EXIFR::MalformedImage, EXIFR::MalformedJPEG
    end
  end
end
