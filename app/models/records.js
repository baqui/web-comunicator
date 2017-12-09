import { Record } from 'immutable';

export const User = new Record({
  id: -1,
  email: '',
  firstName: '',
  lastName: ''
});

export const Contact = new Record({
  id: -1,
  email: '',
  name: '',
  avatar: '',
  status: false
});

export const Message = new Record({
  id: -1,
  message: '',
  type: '',
  userID: -1
});
