import { User } from './user';

export class LoginResponse {
  user: User;
  // tslint:disable-next-line:variable-name
  auth_token: string;
}
