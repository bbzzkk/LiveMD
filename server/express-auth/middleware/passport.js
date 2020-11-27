const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const GoogleStrategy = require("passport-token-google").Strategy;
const config = require("../configuration");
const User = require("../models/user");

passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_SECRET,
      passReqToCallback: true,
    },
    async (req, payload, done) => {
      try {
        const user = await User.findById(payload.sub);

        if (!user) {
          return done(null, false);
        }

        req.user = user;
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

const newGoogleStrategy = require("passport-google-oauth20");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);

  // User.findById(user.userId).then((user) => {
  //   done(null, user);
  // });
});

passport.use(
  "google",
  new newGoogleStrategy(
    {
      callbackURL: "http://localhost:5000/api/v1/auth/google/redirect",
      clientID: config.oauth.google.clientID,
      clientSecret: config.oauth.google.clientSecret,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);

        User.findOne({
          googleId: profile.id,
        }).then((currentUser) => {
          if (currentUser) {
            console.log("user already visited");
            //serialize로 이동
            done(null, currentUser);
          } else {
            new User({
              username: profile.displayName,
              googleId: profile.id,
              email: profile.emails[0].value,
              thumbnail: profile._json.picture,
            })
              .save()
              .then((newUser) => {
                console.log("new user created!");
                console.log(newUser);
                //serialize로 이동
                done(null, newUser);
              });
          }
        });
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);

// passport.use(
//   "googleToken",
//   new GoogleStrategy(
//     {
//       clientID: config.oauth.google.clientID,
//       clientSecret: config.oauth.google.clientSecret,
//       passReqToCallback: true,
//       scope: "openid email profile",
//     },
//     async (req, accessToken, refreshToken, profile, done) => {
//       try {
//         console.log(profie);
//         if (req.user) {
//           req.user.methods.push("google");
//           req.user.google = {
//             id: profile.id,
//             email: profile.emails[0].value,
//           };
//           await req.user.save();
//           return done(null, req.user);
//         } else {
//           let existingUser = await User.findOne({ "google.id": profile.id });
//           if (existingUser) {
//             return done(null, existingUser);
//           }

//           existingUser = await User.findOne({
//             "local.email": profile.emails[0].value,
//           });
//           if (existingUser) {
//             existingUser.methods.push("google");
//             existingUser.google = {
//               id: profile.id,
//               email: profile.emails[0].value,
//             };
//             await existingUser.save();
//             return done(null, existingUser);
//           }

//           const newUser = new User({
//             methods: ["google"],
//             google: {
//               id: profile.id,
//               email: profile.emails[0].value,
//             },
//           });

//           await newUser.save();
//           done(null, newUser);
//         }
//       } catch (error) {
//         done(error, false, error.message);
//       }
//     }
//   )
// );
