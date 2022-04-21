export const USER_SESSION_COOKIE = "session_id";
export const USER_PUBLIC_ADDRESS_COOKIE = "pub_id";
export const USER_ID_COOKIE = "tmp_id";
const USER_SESSION_COOKIE_TIME = 30;

export const setCookie = (
  name: string,
  value: string,
  expiryDate?: Date | null | undefined
) => {
  let expires = "";
  if (expiryDate) {
    expires = `; expires=${expiryDate.toUTCString()}`;
  }

  window.document.cookie = `${name}=${value}${expires}; path=/`;
};

export const getCookie = (name: string): string | null | undefined => {
  name = `${name}=`;
  const cookies = window.document.cookie;
  if (cookies) {
    for (let cookie of cookies.split(";")) {
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
  }

  return null;
};

export const setAuthTokenCookie = (token: string) => {
  const expiryTime = new Date();
  expiryTime.setMinutes(expiryTime.getMinutes() + USER_SESSION_COOKIE_TIME);
  setCookie(USER_SESSION_COOKIE, token, expiryTime);
};

export const setPublicAddressCookie = (address: string) => {
  const expiryTime = new Date();
  expiryTime.setMinutes(expiryTime.getMinutes() + USER_SESSION_COOKIE_TIME);
  setCookie(USER_PUBLIC_ADDRESS_COOKIE, address, expiryTime);
};

export const setUserIdCookie = (userId: string) => {
  const expiryTime = new Date();
  expiryTime.setMinutes(expiryTime.getMinutes() + USER_SESSION_COOKIE_TIME);
  setCookie(USER_ID_COOKIE, userId, expiryTime);
};

export const getAuthTokenCookie = () => getCookie(USER_SESSION_COOKIE);

export const getPublicAddressCookie = () =>
  getCookie(USER_PUBLIC_ADDRESS_COOKIE);

export const getUserIdCookie = () => getCookie(USER_ID_COOKIE);
