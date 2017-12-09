import { Map } from 'immutable';
import { languagesAvailable } from './consts';

export const isLocalStorageAvailable = () => {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch(e) {
        return false;
    }
}

export const getSavedState = () => {
  if( !isLocalStorageAvailable() ) return undefined;
  let userPreferences = Map({ theme: 'default', language: 'pl' });
  const language = localStorage.getItem('language'),
        theme = localStorage.getItem('theme'),
        langParam = location.search;

  if( language ){ userPreferences = userPreferences.set('language', language ); }
  if( theme ){ userPreferences = userPreferences.set('theme', theme ); }
  if( langParam ){
    languagesAvailable.map( lang => {
      if( langParam.indexOf(`=${lang.code}`) > -1 ){ userPreferences = userPreferences.set('language', lang.code ); }
    });
  }
  return { userPreferences }
}
