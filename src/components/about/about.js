import React from 'react'
import './about.css'
import truck from "../../images/ford1.png"

const About = (props) => {

    let aboutContent = props.cmsContent
    console.log(aboutContent);

    return(
        <section className='section-wrapper'>
            <div className='section-title section-content'>
                <h1 className='secondary-header'>{aboutContent.aboutTitle}</h1>
                <p className='text-align-left'>{aboutContent.aboutBody1}</p>
                <p className='text-align-left'>{aboutContent.aboutBody2}</p>
                <p className='text-align-left'>{aboutContent.aboutBody3}</p>
            </div>
            <div className='image-wrapper'>
                <img src={truck}></img>
            </div>
            <div className='about-background-container'>
                <div className='about-background-upper'></div>
                <div className='about-background-lower'></div>
            </div>
        </section>
    )
};

export default About