import { schema, normalize } from 'normalizr';
import { Map, List } from 'immutable';
import { Contact } from './records';

const contact = new schema.Entity('contacts', {}, { idAttribute: 'id'});

export const normalizedContactsListResponse = (response) => {
  let normalized = normalize(response.data, [contact]);
  return List( normalized.result.map(id => toContact( normalized.entities.contacts[id]) ) );
}

const toContact = (obj) => (
  new Contact({
    ...obj
  })
);

const normalizedToImmutable = (normalized) => {
  if (!normalized.entities) {
    throw "It's not normalized...";
  }
  return Map(mapValues(normalized.entities, (value, name) => {
    switch(name) {
    case 'users':
      return undefined //example usage: Map( mapValues(value, toOffer) );
    default:
      throw "Unrecognized normalized entity " + name;
    }
  }));
}

const mapValues = (object, mapper) => {
  let result = {};
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      result[property] = mapper(object[property], property);
    }
  }

  return result;
}
