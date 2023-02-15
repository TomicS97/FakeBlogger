import type { UserLoginRequest } from '../types/UserLoginRequest';

export default {
  async login(credentials: UserLoginRequest) {                                        //Login service. Check credential.
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      let resolved = (Promise as any).resolve({
        id: 1,
        role: 'admin',
        username: 'admin',
      });

      return resolved;
    } else if (
      credentials.username === 'user' &&
      credentials.password === 'user'
    ) {
      let resolved = (Promise as any).resolve({
        id: 2,
        role: 'user',
        username: 'user',
      });

      return resolved;
    } else {
      const rejected = (Promise as any).reject(
        new Error('Invalid credentials.')
      );
      return rejected;
    }
  }
    async logout(token: string) {
    let resolved = (Promise as any).resolve({ status: 204 });
    return resolved;
  }
};
