import {combineReducers} from 'redux';

import {userPreferences} from './userPreferences';
import {contacts} from './contacts';
import {messages} from './messages';
import {users} from './users';
import {login} from './login';

export default combineReducers({
  userPreferences,
  contacts,
  messages,
  users,
  login
});
