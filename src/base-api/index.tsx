import axios from "axios";

const BASE_URL = 'https://api.spacex.land/rest/';

export async function getAllData(url: string | any) {
  const res = await axios.get(BASE_URL + url);
  if (!res.statusText) {
    throw new Error(`Could not fetch url: ${res.request}, status:${res.statusText}`);
  }
  return res;
}

export async function getDataById(id: string | any) {
  const res = await axios.get(`${BASE_URL}launch/${id}`);
  if (!res.statusText) {
    throw new Error(`Could not fetch url: ${res.request}, status:${res.statusText}`);
  }
  return res;
}