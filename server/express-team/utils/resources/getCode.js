const cryptoRandomString = require("crypto-random-string");

const getInvitationCode = (stringLength) => {
  return cryptoRandomString({
    length: stringLength,
  });
};

module.exports = getInvitationCode;
