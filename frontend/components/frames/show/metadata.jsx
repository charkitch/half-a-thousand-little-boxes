import React from 'react';

function MetadataBox({ shownFrame }) {
  let make;
  let model;
  let focalLength;
  let exposureTime;
  let iso;

  if (shownFrame.make) {
    make = shownFrame.make;
  }
  if (shownFrame.model) {
    model = shownFrame.model;
  }

  if (shownFrame.exif) {
    if (shownFrame.exif.focal_length_in_35mm_film) {
      focalLength = shownFrame.exif.focal_length_in_35mm_film;
    }
    if (shownFrame.exif.exposure_time) {
      exposureTime = shownFrame.exif.exposure_time;
    }
    if (shownFrame.exif.iso_speed_ratings) {
      iso = shownFrame.exif.iso_speed_ratings;
    }
  }

  make = make || '';
  model = model || '';
  focalLength = focalLength || '';
  exposureTime = exposureTime || '';
  iso = iso || '';
  return (
    <div className="metadata-display">
      <div>{make} {model}</div>
      <div>{`Focal length: ${focalLength}`}</div>
      <div>{`Exposure: ${exposureTime}`}</div>
      <div>{`ISO: ${iso}`}</div>
    </div>
  );
}

export default MetadataBox;
