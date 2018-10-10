

export const createFrame = (formData) => {
  return $.ajax({
    url: '/api/frames',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const requestUserFrames = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/frames`,
  });
};

export const requestOneFrame = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/frames/${id}`,
  });
};

export const updateOneFrame = (frame) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/frames/${frame.id}`,
    data: { frame }
  });
};

export const deleteOneFrame = (frame) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/frames/${frame.id}`,
    data: { frame },
  });
};

export const requestCurrentUserPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/frames',
  });
};
