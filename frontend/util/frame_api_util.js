

export const createFrame = (formData) => {
  return $.ajax({
    url: '/api/frames',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const requestUserPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/frames',
  });
};
