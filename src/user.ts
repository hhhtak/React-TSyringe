import { injectable, inject } from 'tsyringe'

@injectable()
export default class User {
  private _id!: number | null
  private _name!: string

  constructor(
    @inject('DatabaseInterface') private database: DatabaseInterface,
  ) {}

  set id(value: number) {
    this._id = value
  }

  set name(value: string) {
    this._name = value
  }

  get name() {
    return this._name
  }

  save() {
    if (typeof this._id === 'number') {
      this.database.save(this)
    }
  }
}

export interface DatabaseInterface {
  save: (user: User) => void
}
