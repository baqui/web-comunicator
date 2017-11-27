import { Record } from 'immutable';

export const User = new Record({
  id: -1,
  email: '',
  firstName: '',
  lastName: ''
});

export const Point = new Record({
  lat: 0.0,
  lng: 0.0
})

export const RequestPoint = new Record({
  point: new Point(),
  thumbnail: '',
  link: ''
});
