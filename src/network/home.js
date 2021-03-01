import { request } from "./request";

export function getMuliData() {
  return request({
    url: '/home/multidata'
  })
}
