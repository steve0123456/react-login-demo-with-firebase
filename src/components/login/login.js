import React from 'react';
import {useEffect, useState }from 'react'
import styles from './login.module.css';
import Inputcontrol from '../inputcontrol/inputcontrol';
import { Link,useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword,updateProfile} from'firebase/auth';
import {auth} from '../../firebase';
function Login(){ 
    const [values, setValues] = useState({
        
        "email": "",
        "password": "",
    });
    const [errormessage,seterrormessage] = useState("");
    const navigate =useNavigate();
    const handleSubmit = (event) => {
        if(!values.email || !values.password){
            seterrormessage("Please fill all the fields");
            return;
        }
        seterrormessage("");
        console.log(values);

        signInWithEmailAndPassword(auth,values.email,values.password).then(
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
                    <h1>Login</h1>
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
                        <button onClick={handleSubmit}>Login</button>
                        <p>
                            Already have an account? <span>
                                <Link to ="/signup">Signup</Link>
                                </span>

                        </p>
                    </div>

                </div>
            </div>
        
        </div>
    );


    }
    export default Login;

 