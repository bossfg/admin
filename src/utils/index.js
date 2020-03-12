import axios from 'axios'
import {
  BASEURL
} from '@/config'

export let get = (url) => {
  return axios.get(BASEURL + url)
}