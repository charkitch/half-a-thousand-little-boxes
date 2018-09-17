

export const createFrame = (imageData) => {
  debugger
  return $.ajax({
    url: '/api/frames',
    method: 'POST',
    data: imageData,
    contentType: false,
    processData: false
  });
};
