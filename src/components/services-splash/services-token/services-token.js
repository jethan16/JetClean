import React from 'react';
import {graphql} from 'gatsby';
import "./services-token.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const servicesToken = (props) => {
    return(
        <div className='services-token' id={props.id}>
            <div className='token'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <p>{props.text}</p>
        </div>
    );
;}

export default servicesToken