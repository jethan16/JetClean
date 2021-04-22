import React, { useState, useEffect } from 'react';
import {graphql} from 'gatsby'
import "../styles/styles.css"
import Button from "../components/button/button"
import MenuBars from "../components/HamburgerMenu/hamburger"
import ServicesSplash from "../components/services-splash/services-splash"

// NOTE: ALL FUNCTIONALITY ABSTRACTED INTO COMPONENT FILE

const IndexPage = ({data}) => {

  return (
    <>
      <title>Jet Clean</title>
      <main>
        <MenuBars />
        {/* HERO */}
        <section className='hero'>
          <div className='image-container'>
            <div className='hero-overlay'></div>
            <div className='hero-image'></div>
          </div>
          <div className='hero-text'>
            <h1>{data.datoCmsHeroTitle.heroTitle}</h1>
            <h2>{data.datoCmsHeroTitle.heroSubtitle}</h2>
            <Button buttonText='Contact Us' buttonStyle='hero-button'/>
          </div>
          <div className='corner-triangle'>
            <img src=''/>
          </div>
        </section>
      </main>
      <ServicesSplash cmsContent={data.datoCmsServicesContent}/>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query MainQuery {
    datoCmsHeroTitle {
      heroTitle
      heroSubtitle  
      heroBackground {
        url
      }
    }
    datoCmsServicesContent {
      servicesSplashSubtitle
      servicesSplashTitle
    }
  }
`