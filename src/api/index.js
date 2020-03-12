import { get } from '@/utils'
export let getuserList = () => {
  return get("/userList")
}