export type User = {
  login: {
    uuid: string
  }
  name: {
    first: string
    last: string
  }
  email: string
  location: {
    city: string
    country: string
  }
  picture: {
    large: string
  }
}

export type UsersResponse = {
  results: User[]
}
