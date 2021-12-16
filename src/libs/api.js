const url = 'https://reqres.in/api/users';

const request = () => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: null,
  })
    .then(response => response.json())
    .catch(e => e.json());
};

export default request;
