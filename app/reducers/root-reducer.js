import {combineReducers} from 'redux';

import {user} from './user';
import {userPreferences} from './userPreferences';
import {contacts} from './contacts';

export default combineReducers({
  user,
  userPreferences,
  contacts
});
