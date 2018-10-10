import React from 'react';

function MetadataBox({ shownFrame }) {
  let make;
  let model;
  let focalLength;
  let exposureTime;
  let iso;
  let takenTime;
  let uploadTime = new Date(shownFrame.createdAt).toDateString();


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
    if (shownFrame.exif.date_time_original) {
      takenTime = new Date(shownFrame.exif.date_time_original).toDateString();
    }

  }

  make = make || '';
  model = model || '';
  focalLength = focalLength || '';
  exposureTime = exposureTime || '';
  iso = iso || '';
  return (
    <div>
      <div className="metadata-camera-display">
        <div>{make} {model}</div>
        <div>{`Focal length: ${focalLength}`}</div>
        <div>{`Exposure: ${exposureTime}`}</div>
        <div>{`ISO: ${iso}`}</div>
      </div>
      <div className="metadata-camera-general">
        <td>
          <tr>Uploaded</tr>
          <tr>{uploadTime}</tr>
        </td>
        <td>
          <tr>Taken</tr>
          <tr>{takenTime}</tr>
        </td>
        <td>
          <tr>Latitude</tr>
          <tr>{uploadTime}</tr>
        </td>
        <td>
          <tr>Longitude</tr>
          <tr>{uploadTime}</tr>
        </td>
        <td>
          <tr>Altitude</tr>
          <tr>{uploadTime}</tr>
        </td>
      </div>
    </div>
  );
}

export default MetadataBox;
