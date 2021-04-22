import React, { useState, useEffect } from 'react';
import {graphql} from 'gatsby';
import "./services.splash.css"
import ServicesToken from "./services-token/services-token"
import Button from "../button/button"
import "../../utils/fontawesome"

const servicesSplash = (props) => {
    return(
        <>
            <section className='services-splash'>
                <div className='services-title'>
                    <h1>{props.cmsContent.servicesSplashTitle}</h1>
                    <h2>{props.cmsContent.servicesSplashSubtitle}</h2>
                </div>
                <div className='services-path'>
                    <ServicesToken text='Restore' icon={'leaf'} id={'token-1'}/>
                    <ServicesToken text='Protect' icon={'shield-alt'} id={'token-2'}/>
                    <ServicesToken text='Complete' icon={'check'} id={'token-3'}/>
                </div>
                <Button buttonStyle='alert-button' buttonText='See Our Services'/>
            </section>
        </>
    );
};

export default servicesSplash;