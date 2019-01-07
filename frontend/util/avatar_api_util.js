export const createAvatar = (formData) => {
  debugger
  return $.ajax({
    url: '/api/users/'+formData.id + '/avatar',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  });
};


export const updateAvatar = (frame) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/frames/${frame.id}`,
    data: { frame }
  });
};

export const deleteAvatar = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/` + data.userId + '/avatar' + data.avatarId,
  });
};
