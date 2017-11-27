import { schema, normalize } from 'normalizr';
import { Map, List } from 'immutable';
import { Point, RequestPoint } from './records';

const request_point = new schema.Entity('requestPoints', {}, { idAttribute: 'id'});

export const normalizedRequestPointsResponse = (response) => {
  let normalized = normalize(response.data, [request_point]);
  return List( normalized.result.map(id => toRequestPoint( normalized.entities.requestPoints[id]) ) );
}

const toPoint = (obj) => new Point(obj);

const toRequestPoint = (obj) => (
  new RequestPoint({
    ...obj,
    point: toPoint(obj.point)
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
