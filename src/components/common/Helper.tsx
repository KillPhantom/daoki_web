export const emailValidationCheck = (emailValue: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    return true;
  }
  return false;
};
