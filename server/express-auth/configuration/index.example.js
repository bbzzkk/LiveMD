if (process.env.NODE_ENV === "test") {
  module.exports = {
    JWT_SECRET: "",
    oauth: {
      google: {
        clientID: "",
        clientSecret: "",
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: "",
    oauth: {
      google: {
        clientID: "",
        clientSecret: "",
      },
    },
  };
}
