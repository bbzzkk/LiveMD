const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("owner").readOwn("profile").updateOwn("profile");

  ac.grant("admin");
  // .extend("basic").readAny("profile");

  //
  //ac.grant("admin")
  //   .extend("basic")
  //   .extend("supervisor")
  //   .updateAny("profile")
  //   .deleteAny("profile");

  ac.grant("writer");
  ac.grant("reader");
  return ac;
})();
