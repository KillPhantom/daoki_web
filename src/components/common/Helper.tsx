export const emailValidationCheck = (emailValue: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    return true;
  }
  return false;
};

export const parseTwitterLink = (twitterLink: string) => {
  if (!twitterLink.startsWith("https://twitter.com/")) {
    return null;
  }
  return twitterLink.replace(/\?.+/, "").split("/").slice(-1).join(); // remove everything after ? should be ref params
};
