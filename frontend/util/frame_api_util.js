

export const createFrame = (formData) => {
  debugger
  return $.ajax({
    url: '/api/frames',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};
