const request = options => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem('accessToken')) {
    headers.append(
      'Authorization',
      `Bearer ${localStorage.getItem('accessToken')}`,
    );
  }

  const defaults = { headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    }),
  );
};

const getCurrentUser = () => {
  if (!localStorage.getItem('accessToken')) {
    return Promise.reject('No access token set.');
  }

  return request({
    url: 'http://localhost:8080/user/me',
    method: 'GET',
  });
};

export default getCurrentUser;
