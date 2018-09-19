export const requestOneUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  });
};
