// app.use(passport.initialize());
// app.use(passport.session());


// const login = passport.use(new Auth0Strategy({
//     domain,
//     clientID,
//     clientSecret,
//     callbackURL:  '/auth/callback'
//    }, (accessToken, refreshToken, extraParams, profile, done) => {
//         knex('users').where('authid', profile._json.sub)
//         .then((user, err) => {
//             if (!user[0]) { //if there isn't a user, we'll create one!
//                 console.log('CREATING USER');
//                 knex('users').insert({username: profile.nickname, authid: profile._json.sub})
//                 .then((res) => {
//                     return knex('users').where('id',res) })
//                     .then((res, err) => {
//                     console.log('USER CREATED', res[0]);
//                     return done(err, res[0]); // GOES TO SERIALIZE USER
//                 })
//             } else { //when we find the user, return it
//                 console.log('FOUND USER', user[0]);
//                 return done(err, user[0]);
//             }
//         });
//    }
//  ) 
// );



// module.exports = { 
//     login
// }