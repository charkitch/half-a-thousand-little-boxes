

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


export const requestOneFrame = (id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/frames/${id}',
  });
};

export const editFrame = (frame) => {
  return $.ajax({
    method: 'PATCH',
    url: '/api/frames/${id}',
    data: { frame }
  });
};
