var profiles = [
    {
      name: 'Preston McNeil',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
      status: 'Everything is bigger in Texas'
    },
    {
      name: 'Ryan Rasmussen',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
      status: 'RR Rules'
    },
    {
      name: 'Terri Ruff',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
      status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
      name: 'Lindsey Mayer',
      pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
      status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
  ];


const getFriendsProfiles = (req, res, next) => {
    let user = req.session.currentUser
    
    let friendsList = {
        currentUser: user,
        friends: []
    }

    for (let i = 0; i<user.friends.length; i++) {
        // console.log('Friend: ',user.friends[i]);
         for (let j = 0; j<profiles.length; j++) {
             if (profiles[j].name == user.friends[i]) {
                // console.log('Profile: ', profiles[j])
                 friendsList.friends.push(profiles[j])
        
            }
           
        }
    }
    console.log(friendsList)
    return res.json(friendsList);
}



  module.exports = { 
    profiles,
    getFriendsProfiles
}