import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config';

const timeOut = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took to long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeOut(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};
