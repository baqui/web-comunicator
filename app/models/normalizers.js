import { schema, normalize } from 'normalizr';
import { Map, List } from 'immutable';
import { Contact, Message } from './records';

const contact = new schema.Entity('contacts', {}, { idAttribute: 'id'});
const message = new schema.Entity('messages', {}, { idAttribute: 'id'});

export const normalizedContactsListResponse = (response) => {
  let normalized = normalize(response.data, [contact]);
  return List( normalized.result.map(id => toContact( normalized.entities.contacts[id]) ) );
}

const toContact = (obj) => (
  new Contact({
    ...obj
  })
);

export const normalizedMessagesListResponse = (response) => {
  let normalized = normalize(response.data, [contact]);
  return List( normalized.result.map(id => toMessage( normalized.entities.contacts[id]) ) );
}

export const normalizedMessage = (message) => ( toMessage(message) );

const toMessage = (obj) => (
  new Message({
    ...obj
  })
);
