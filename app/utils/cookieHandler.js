export const getCookie = key => {
  key = `${key}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookiesArray = decodedCookie.split(';');

  const cookieValue = cookiesArray.reduce((value, cookie) => {
    cookie = cookie.trim();
    if (cookie.indexOf(key) == 0) {
      value = cookie.substring(key.length, cookie.length);
    }
    return value;
  }, '');

  return cookieValue;
};

export const setCookie = (key, value, expireInSeconds = 0) => {
  let cookieString = `${key}=${value};`;
  if (expireInSeconds !== 0) {
    let expirationDate = new Date();
    let expireInMiliSeconds = expireInSeconds * 1000;
    expirationDate.setTime(expirationDate.getTime() + expireInMiliSeconds);
    const expires = expirationDate.toUTCString();
    cookieString = `${cookieString}expires=${expires};`;
  }
  cookieString = `${cookieString}path=/`;

  document.cookie = cookieString;
};

export const destroyCookie = key => {
  document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 UTC;path=/`;
};
