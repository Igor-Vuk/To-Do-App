'use strict';

import 'isomorphic-fetch';

/**
 * Isomorphic fetch implementation
 * @param  {String} path should be path to api endpoint
 * @param  {String} method should be simple string 'GET', 'POST', 'DELETE', 'PUT'
 * @param  {Object} body should be object or null at GET request
 * @return {Promise} response should be promise or error
 */

export default function apiFetch(path, method, body) {
  let options = {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  if (method === 'GET') {
    delete options.body;
  }

  function handleErrors(response) {
    if (response.status < 200 || response.status >= 300) {
      return response.json()
      .then(res => Promise.reject(res.message));
    }

    return response;
  }

  return fetch(path, options)
  .then(response => handleErrors(response))
  .then(response => response.json());
}
