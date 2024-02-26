import React, { useState } from 'react';
import styles from './signup.module.css';
import Inputcontrol from '../inputcontrol/inputcontrol';
import { Link,useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from'firebase/auth';
import {auth} from '../../firebase';
function Signup() { // Change function name to start with uppercase letter
    const [values, setValues] = useState({
        "name": "",
        "email": "",
        "password": "",
    });
    const [errormessage,seterrormessage] = useState("");
    const navigate =useNavigate();
    const handleSubmit = (event) => {
        if(!values.name || !values.email || !values.password){
            seterrormessage("Please fill all the fields");
            return;
        }
        seterrormessage("");
        console.log(values);

        createUserWithEmailAndPassword(auth,values.email,values.password).then(
        async(res)=>{
            const user = res.user;
            await updateProfile(user,{displayName:values.name});
            console.log(res);

        }).catch((err)=>
        {
            seterrormessage(err.message);
        })
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <div className={styles.heading}>
                    <h1>Signup</h1>
                    <Inputcontrol
                        label="name"
                        placeholder="Enter your name"
                        onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                    />
                    <Inputcontrol
                        label="email"
                        placeholder="Enter Email"
                        onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                    />
                    <Inputcontrol
                        label="password"
                        placeholder="Enter Password"
                        onChange={(event) => setValues((prev) => ({ ...prev, password: event.target.value }))}
                    />

                    <div className={styles.footer}>
                        <b className={styles.error}>{errormessage}</b>
                        <button onClick={handleSubmit}>Login</button>
                        <p>
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
