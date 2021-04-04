import { container } from 'tsyringe'
import User from './user'
import Database from './database'

container.register('DatabaseInterface', {
  useClass: Database,
})

export const user = container.resolve(User)

user.id = 0
user.name = 'test user'
user.save()
