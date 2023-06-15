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
  const baseUrl = 'http://127.0.0.1:8000/api/v1/';

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

  const url = `${baseUrl}${endpoint}`;
  const res = await fetch(url, options);

  return await res.json();
};
