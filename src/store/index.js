import { createStore, createLogger } from 'vuex';
import users from './modules/users';

export default createStore({
  state: {},
  modules: {
    users
  },
  plugins: [createLogger()],
});
