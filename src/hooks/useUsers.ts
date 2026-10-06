import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { getUsers } from '../services/userService'
import type { User } from '../types/user'

interface UseUsersResult {
  users: User[]
  isLoading: boolean
  error: string
  retry: () => void
}

export function useUsers(page: number, resultsPerPage: number): UseUsersResult {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryCount, setRetryCount] = useState(0)

  const retry = useCallback(() => {
    setRetryCount((count) => count + 1)
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    async function loadUsers() {
      setIsLoading(true)
      setError('')

      try {
        const nextUsers = await getUsers(page, resultsPerPage, controller.signal)
        setUsers(nextUsers)
      } catch (requestError) {
        if (axios.isCancel(requestError)) return
        setError('We could not load the team right now. Please try again.')
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void loadUsers()
    return () => controller.abort()
  }, [page, resultsPerPage, retryCount])

  return { users, isLoading, error, retry }
}
