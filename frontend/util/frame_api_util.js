

export const uploadPhoto = (imageData) => {
  return $.ajax({
    url: '/api/frames',
    method: 'POST',
    data: imageData,
    contentType: false,
    processData: false
  });
};
