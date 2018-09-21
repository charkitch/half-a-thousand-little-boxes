
export const createFollow = (followeeId) => {
  return $.ajax({
    url: `/api/users/${followeeId}/followings`,
    method: 'POST',
  });
};

export const deleteFollow = (followeeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/followings/${followeeId}`,
  });
};
