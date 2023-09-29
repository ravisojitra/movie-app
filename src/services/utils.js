import axios from "axios";
import { TMDB_TOKEN } from "./constants";

export default function callApi(url, method, data, headers = {}) {
  return axios(url, {
    method: method,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + TMDB_TOKEN
    },
    data
  }).then(result => {
    console.log(result);
    return result.data;
  }).catch(err => {
    console.log("we got some error => ", err)
  })
}