import { injectable, inject } from 'tsyringe'
import { UserApiInterface } from '../interface/apiInterface'

@injectable()
export class UserApi {
  constructor(@inject('ApiInterface') private api: UserApiInterface) {}
}

fetchUser(args: { id: number }) {
  return this.api.fetchUser(args)
}
