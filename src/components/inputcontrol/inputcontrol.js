import React from 'react';
import styles from './inputcontrol.module.css';
function inputcontrol(props){  
    return (
        <div classname ={styles.container}>
            {props.label && <label>{props.name}</label> }
            <input type="text"{...props}></input>
        </div>
    );


    }
    export default inputcontrol;

 