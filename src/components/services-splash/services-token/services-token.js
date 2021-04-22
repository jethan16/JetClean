import React, { useState, useEffect } from 'react';
import {graphql} from 'gatsby';
import "./services-token.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const servicesToken = (props) => {
    return(
        <div className='services-token' id={props.id}>
            <p>{props.text}</p>
            <div className='divider'/>
            <div className='token'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
        </div>
    );
;}

export default servicesToken