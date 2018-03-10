import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing.js';
import Shop from './components/Shop/Shop.js';
import Details from './components/Details/Details.js';
import Cart from './components/Cart/Cart.js';
import ThankYou from './components/ThankYou/ThankYou.js';

export default (

    <Switch>
    
        <Route exact path='/' component={ Landing }/>

        <Route path='/shop' component={ Shop }/>
        
        <Route path='/details/:name' component={ Details }/>

        <Route path='/cart' component={ Cart }/>

        <Route path='/thank-you' component= { ThankYou }/>
            
    </Switch>

)