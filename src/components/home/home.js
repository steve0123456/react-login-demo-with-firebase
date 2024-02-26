import React from 'react';
import {Link} from 'react-router-dom';
function home(props){  
    return (
        <div>
            <div>
                <h1>
                <Link to="/login">login</Link>
                </h1>
            </div>
            <br />
            <div>
                <h1>
                <Link to="/signup">Signup</Link>
                </h1>
            </div>
            <br />
            <br />
            <h2>{ props.name? 'Welcome - ${props.name}': "login please"}</h2>
          
        </div>
    );


    }
    export default home;

 