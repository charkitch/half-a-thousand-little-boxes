import React from 'react';

function MetadataBox({ shownFrame }) {
  let make;
  let model;
  let focalLength;
  let exposureTime;
  let iso;
  let takenTime;
  let fNumberFrac;
  let arr;
  let fNumber;
  let altitude;
  let longitude;
  let latitude;
  let uploadTime = new Date(shownFrame.created_at).toDateString();
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
    if (shownFrame.exif.f_number) {
      fNumberFrac = shownFrame.exif.f_number;
      arr = fNumberFrac.split('/');
      fNumber = parseInt(arr[0]) / parseInt(arr[1]);
    }
    if (shownFrame.altitude) {
      altitude = shownFrame.altitude;
    }
    if (shownFrame.longitude) {
      longitude = Math.floor(shownFrame.longitude * 100) / 100;
    }
    if (shownFrame.latitude) {
      latitude = Math.floor(shownFrame.latitude * 100) / 100;
    }
  }

  make = make || '';
  model = model || '';
  focalLength = focalLength || '';
  exposureTime = exposureTime || '';
  iso = iso || '';
  return (
    <div className="metadata">
      <div className="metadata-camera-display">
        <div className="make-model">{make} {model}</div>
        <div className="camera-specifics">
          <div>{focalLength + 'mm'}</div>
          <div className='delimiter-if-you-will'>/</div>
          <div>{ '\u0192/' + fNumber}</div>
          <div className='delimiter-if-you-will'>/</div>
          <div>{exposureTime + 's'}</div>
          <div className='delimiter-if-you-will'>/</div>
          <div>{`ISO ${iso}`}</div>
        </div>
      </div>
      <div className="metadata-camera-general">
        <div className="row-wrap">
          <div className='category'>Uploaded</div>
          <div className='data'>{uploadTime}</div>
        </div>
        <div className="row-wrap">
          <div className='category'>Taken</div>
          <div className='data'>{takenTime}</div>
        </div>
        <div className="row-wrap">
          <div className='category'>Latitude</div>
          <div className='data'>{latitude + '\u00b0'}</div>
        </div>
        <div className="row-wrap">
          <div className='category'>Longitude</div>
          <div className='data'>{longitude + '\u00b0'}</div>
        </div>
        <div className="row-wrap">
          <div className='category'>Altitude</div>
          <div className='data'>{altitude + ' m a.s.l.'}</div>
        </div>
      </div>
    </div>
  );
}

export default MetadataBox;
