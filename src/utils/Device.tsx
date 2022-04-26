const getUserAgent = () => {
  const userAgent = window.navigator.userAgent;
  return userAgent && userAgent.toLowerCase();
};

export const getIsIOSBrowser = () => {
  const userAgent = getUserAgent();
  return Boolean(
    userAgent &&
      (userAgent.indexOf("ipod") !== -1 || userAgent.indexOf("iphone") !== -1)
  );
};

export const getIsAndroidBrowser = () => {
  const userAgent = getUserAgent();
  return Boolean(userAgent && userAgent.indexOf("android") !== -1);
};

export const getIsMobileBrowser = () =>
  getIsIOSBrowser() || getIsAndroidBrowser();
