import axios from 'axios'
import type { User, UsersResponse } from '../types/user'

const usersApi = axios.create({
  baseURL: 'https://randomuser.me/api',
  params: {
    seed: 'usertoso',
    nat: 'us',
    inc: 'login,name,email,location,picture',
  },
})

export async function getUsers(
  page: number,
  results: number,
  signal?: AbortSignal,
): Promise<User[]> {
  const response = await usersApi.get<UsersResponse>('', {
    params: { page, results },
    signal,
  })

  return response.data.results
}
