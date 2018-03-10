const users = require('./userData.json')

const getUsers = (req, res, next) => {
    if (req.query.age) {
        console.log('filtering for age: ', req.query.age)
        const ageFilter = users.filter(function(data) {
            return data.age < req.query.age
        });
        return res.json(ageFilter);
    }

    if (req.query.lastname) {
        console.log('filtering for Last Name: ', req.query.lastname)
        const nameFilter = users.filter(function(name){
            return name.last_name == req.query.lastname
        });
        return res.json(nameFilter);
    }

    if (req.query.email) {
        console.log('filtering for email: ', req.query.email)
        const emailFilter = users.filter(function(email){
            return email.email == req.query.email
        });
        return res.json(emailFilter);
    }

    if (req.query.favorites) {
        console.log('filtering for favorite: ', req.query.favorites)
        let returnArr = [];  //Will push matches into here for return at end
       
        for (let i=0; i<users.length; i++) {                    //loop through all users
            for (let j=0; j< users[i].favorites.length; j++) {  //loop through each favorite for each user
                if (users[i].favorites[j] == req.query.favorites) {
                    returnArr.push(users[i])
                    console.log(returnArr)
                }
            }
        }
        return res.json(returnArr)
    } 
 else {
        
        
        return res.json( users );   // just return all users
    }
}
    



const getUser = (req, res, next) => {
    if (req.params.userId) {
        
    console.log('looking for: ', users[86].id)

    const idFilter = users.filter(function(data) {
        return data.id == req.params.userId
    });

    if( idFilter[0] != null ){
        return res.json(idFilter[0])

    } else {
        return res.status(404).json( null );
    }
    }
}




const getAdmins = (req, res, next) => {
    console.log('filtering for admins')
    const adminFilter = users.filter(function(name){
        return name.type == 'admin'
    });
    return res.json(adminFilter);
}

const getNonAdmins = (req, res, next) => {
    console.log('filtering for non-admins')
    const adminNonFilter = users.filter(function(name){
        return name.type != 'admin'
    });
    return res.json(adminNonFilter);
}


const getUserType = (req, res, next) => {
    console.log('filtering for user type')
    const answer = users.filter(function(user){
        return user.type == req.params.userType
    });
    return res.send(answer);
}

const putUser = (req, res, next) => {
    console.log(req.body.name)
    
    for (let i=0; i<users.length; i++) {
        if (users[i].id == req.params.userID) {
            users[i].first_name = req.body.first_name
            users[i].last_name = req.body.last_name
            users[i].type = req.body.type

            return res.json(users)
        }
    }
}

const postUser = (req, res, next) => {
    
    nextID = 0;
    for (let i = 1; i<users.length; i++) {
        if (users[i].id > users[i-1].id) {
            nextID = users[i].id
            console.log(nextID)
        }
    }
    
    let newObj = req.body
    newObj.id = nextID + 1
    console.log (newObj)
    
    
    console.log(req.body)
    users.push(req.body)
    return res.json(users)
    
}


const deleteUser = (req, res, next) => {
    console.log('delete')

    for (let i =0; i<users.length; i++) {

        if (users[i].id == req.params.userID) {
            console.log(users[i].id)
            users.splice(i,1)
        }
    }
    return res.json(users)
}






module.exports = {
    getUsers,
    getAdmins,
    getNonAdmins,
    getUserType,
    putUser,
    postUser,
    deleteUser,
    getUser
}