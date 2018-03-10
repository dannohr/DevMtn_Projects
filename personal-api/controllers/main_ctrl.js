var user = require('../user.js');


const getName = (req, res, next) => {
    res.json({ "name": user.name });
}

const getLocation = (req, res, next) => {
    res.json({ "location": user.location });
}

const getOccupations = (req, res, next) => {
    if (req.query.order) {

        if (req.query.order === 'asc') {
            res.json({ "occupations": user.occupations.sort() });
            
        } else {
            res.json( {"occupations": user.occupations.reverse() });
        } 
    
    } else {
        res.json({ "occupations": user.occupations });
    }
}

const getOccupationsLatest = (req, res, next) => {
    res.json({ "latestOccupation": user.occupations.slice(-1)[0] });
}

const getHobbies = (req, res, next) => {
    res.json({ "hobbies": user.hobbies });
}

const getHobbiesType = (req, res, next) => {
    console.log(req.params.type)
    res.json(user.hobbies.filter(hobbies => hobbies.type === req.params.type));
}

const getFamily = (req, res, next) => {
    if (req.query.relation) {
        res.json(user.family.filter(family => family.relation === req.query.relation));
    } else {
        res.json(user.family);
    }
}

const getFamilyGender = (req, res, next) => {
    res.json(user.family.filter(family => family.gender === req.params.gender));
}

const getRestaurants = (req, res, next) => {
    if (req.query.rating) {
        res.json(user.restaurants.filter(restaurants => restaurants.rating == req.query.rating));
    } else {
        res.json(user.restaurants);
    }
}

const getRestaurantName = (req, res, next) => {
    res.json(user.restaurants.filter(restaurants => restaurants.name === req.params.name));
}

const putName = (req, res, next) => {
    console.log(req.query.name)
    user.name = req.query.name
    res.json(user.name);
}

const putLocation = (req, res, next) => {
    console.log(req.query.location)
    user.location = req.query.location
    res.json(user);
}

const postHobbies = (req, res, next) => {
    user.hobbies.push(req.body);
    res.json(user);
}

const postOccupations = (req, res, next) => {
    user.occupations.push(req.body.occupations);
    console.log(req.body)
    res.json(user);
}





module.exports = {
    getName,
    getLocation,
    getOccupations,
    getOccupationsLatest,
    getHobbies,
    getHobbiesType,
    getFamily,
    getFamilyGender,
    getRestaurants,
    getRestaurantName,
    putName,
    putLocation,
    postHobbies,
    postOccupations
}