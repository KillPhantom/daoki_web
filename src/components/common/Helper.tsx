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

export const formatAddressDisplayHash = (hash: string | undefined | null) => {
  if (!hash || hash.length < 5) {
    return "";
  }
  const first4digit = hash.substring(0, 5);
  const last4digit = hash.substring(hash.length - 4);

  return first4digit + "..." + last4digit;
};
