import {combineReducers} from 'redux';

import {userPreferences} from './userPreferences';
import {contacts} from './contacts';
import {messages} from './messages';
import {users} from './users';

export default combineReducers({
  userPreferences,
  contacts,
  messages,
  users
});
