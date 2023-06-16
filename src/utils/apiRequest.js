import { store } from '../store/store';

export const API_REQ_TYPES = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const apiRequest = async (
  endpoint,
  method = API_REQ_TYPES.GET,
  body,
  stringify = true
) => {
  let baseUrl;
  if (process.env.NODE_ENV === 'development') baseUrl = 'http://127.0.0.1:8000';
  else baseUrl = 'https://hanbal-nemat-restaurant.cyclic.app';

  const options = {
    method,
  };

  const token = store.getState().user.token;
  options.headers = {
    Authorization: `Bearer ${token}`,
  };

  if (method === API_REQ_TYPES.POST || method === API_REQ_TYPES.PATCH) {
    if (stringify) {
      options.headers['Content-type'] = 'application/json';
      options.body = JSON.stringify(body);
    } else {
      options.body = body;
    }
  }

  const url = `${baseUrl}/api/v1/${endpoint}`;
  const res = await fetch(url, options);

  return await res.json();
};
