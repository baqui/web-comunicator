import store from '../Store.js';
import { getChosenLanguage } from '../selectors/userPreferences';

export default (message) => {
  const chosen_language = getChosenLanguage(store.getState());
  return translation[chosen_language][message] ? translation[chosen_language][message] : translation['en'][message];
}


const translation = {
  pl: {
    available: 'dostępny',
    unavailable: 'niedostępny',
    busy: 'zajęty',
    change_colors: 'Edytuj kolory',
    edit_profile: 'Edytuj profil',
    change_language: 'Zmień język',
    write_message: 'Napisz wiadomość...',
    home: 'Strona główna',
  },
  en: {
    available: 'available',
    unavailable: 'unavailable',
    busy: 'busy',
    change_colors: 'Change colors',
    edit_profile: 'Edit profile',
    change_language: 'Change language',
    write_message: 'Write a message...',
    home: 'home',
  },
  es: {
    available: 'disponible',
    unavailable: 'no disponible',
    busy: 'ocupado',
    change_colors: 'Cambiar colores',
    edit_profile: 'Editar perfil',
    change_language: 'Cambiar idioma',
    write_message: 'Escribir un mensaje ...',
    home: 'Hogar',
  }
}
