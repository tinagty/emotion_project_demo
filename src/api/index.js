import { get, post } from '@/utils/request'

export function getGenerate({ abs }) {
  return post({
    api: '/generate/calc',
    params: {
      data: abs
    }
  })
}
