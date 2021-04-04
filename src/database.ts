import User, { DatabaseInterface } from './user'

export default class Database implements DatabaseInterface {
  save(user: User) {
    console.log(`${user}を保存しました`)
  }
}
